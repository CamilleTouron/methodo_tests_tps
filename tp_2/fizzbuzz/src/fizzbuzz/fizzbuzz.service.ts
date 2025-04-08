import { Injectable } from '@nestjs/common';

@Injectable()
export class FizzbuzzService {

    fizzBuzzValues(n: number): string {
        let result = '';

        for (let i = 1; i <= n; i++) {
            result += this.fizzBuzzValue(i) + '\n';
        }

        return result;
    }

    fizzBuzzValue(n: number): string {
        if (n % 3 === 0 && n % 5 === 0) {
            return 'FizzBuzz';
        } else if (n % 3 === 0) {
            return 'Fizz';
        } else if (n % 5 === 0) {
            return 'Buzz';
        } else {
            return n.toString();
        }
    }
}
