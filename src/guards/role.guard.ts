import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../enums/role.enum';
import { ROLES_KEY } from '../decorator/roles.decorator';

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
