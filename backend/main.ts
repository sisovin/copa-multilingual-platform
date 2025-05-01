import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Copa Multilingual Platform API')
    .setDescription('API documentation for Copa Multilingual Platform')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Accessibility audit middleware
  app.use('/accessibility-audit', express.static(path.join(__dirname, '..', 'accessibility-audit')));

  await app.listen(3000);
}
bootstrap();
