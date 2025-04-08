import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatriceService {
    somme(a: number, b: number): number {
        return a + b;
    }

    soustraction(a: number, b: number): number {
        return a - b;
    }
}
