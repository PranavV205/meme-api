import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://memehub-p.netlify.app',
    ], // Replace with your frontend origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable cookies/auth headers if needed
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
