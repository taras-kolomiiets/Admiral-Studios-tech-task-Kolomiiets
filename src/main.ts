import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Валідація DTO
  app.useGlobalPipes(new ValidationPipe());

  // Налаштування Swagger
  const config = new DocumentBuilder()
    .setTitle('To-Do API')
    .setDescription('API для управління завданнями')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // URL: /api

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
