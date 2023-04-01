import {
  createParamDecorator,
  ExecutionContext,
  NotFoundException,
} from '@nestjs/common';

export const UserCustomDecorator = createParamDecorator(
  (alter: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    if (request.user) {
      if (alter) {
        return request.user[alter];
      } else {
        return request.user;
      }
    } else {
      throw new NotFoundException(
        'Usuario não encontrado no Request. Use o authGuard na rota',
      );
    }
  },
);
