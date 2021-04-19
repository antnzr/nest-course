import { ValidationPipe } from './pipes/validation.pipe';
import { AppModule } from './app.module';
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
  .setTitle('Advanced Backend')
  .setDescription('REST API docs')
  .setVersion('1.0.0')
  .addTag('AntNzr')
  .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT, () => console.log(`Server is listening on port: [${PORT}]`));
}

start();
