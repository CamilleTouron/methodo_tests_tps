import { NestFactory } from '@nestjs/core';
import {CalculatriceModule} from "./calculatrice/calculatrice.module";

async function bootstrap() {
  await NestFactory.create(CalculatriceModule);
}
bootstrap();
