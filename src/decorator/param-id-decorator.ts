import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const paramIdDecorator = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    return Number(context.switchToHttp().getRequest().params.id);
  },
);
