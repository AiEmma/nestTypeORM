import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'src/decorator/roles.decorator';
import { Role } from 'src/enums/role.enum';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext) {
    const requeridRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requeridRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    // eslint-disable-next-line prettier/prettier
    const rolesFilted = requeridRoles.filter(role => role === user.role);
    return rolesFilted.length > 0;
  }
}
