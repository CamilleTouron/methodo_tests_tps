import { NestFactory } from '@nestjs/core';
import {BowlingService} from "./bowling/bowling.service";

async function bootstrap() {
  await NestFactory.create(BowlingService);
}
bootstrap();
