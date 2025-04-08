import { NestFactory } from '@nestjs/core';
import {FizzbuzzService} from "./fizzbuzz/fizzbuzz.service";

async function bootstrap() {
  await NestFactory.create(FizzbuzzService);
}
bootstrap();
