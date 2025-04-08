import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatriceService {
    somme(a: number, b: number): number {
        return a + b;
    }

    soustraction(a: number, b: number): number {
        return a - b;
    }

    multiplication(a: number, b: number): number {
        return a * b;
    }

    division(a: number, b: number): number {
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
    }

    exponention(a: number, b: number): number {
        return Math.pow(a, b); // ou a ** b
    }
}
