import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { LogInterceptor } from './interceptor/log.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //usar quando o back esta no heroku e front no sandbox
  app.useGlobalPipes(new ValidationPipe());
  //app.useGlobalInterceptors(new LogInterceptor()); //aqui funciona globalmente
  await app.listen(3000);
}
bootstrap();
