import {Test, TestingModule} from '@nestjs/testing';
import {CalculatriceService} from './calculatrice.service';

describe('CalculatriceService', () => {
    let service: CalculatriceService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CalculatriceService],
        }).compile();

        service = module.get<CalculatriceService>(CalculatriceService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('somme', () => {
        it('should return the sum of two numbers', () => {
            const result = service.somme(2, 3);
            expect(result).toBe(5);
        });

        it('should return the sum when one number is negative', () => {
            const result = service.somme(-2, 3);
            expect(result).toBe(1);
        });

        it('should return the sum when both numbers are negative', () => {
            const result = service.somme(-2, -3);
            expect(result).toBe(-5);
        });
    });

    describe('soustraction', () => {
        it('should return the difference of two numbers', () => {
            const result = service.soustraction(5, 3);
            expect(result).toBe(2);
        });

        it('should return the difference when the first number is smaller', () => {
            const result = service.soustraction(2, 5);
            expect(result).toBe(-3);
        });
    });

    describe('multiplication', () => {
        it('should return the product of two numbers', () => {
            const result = service.multiplication(2, 3);
            expect(result).toBe(6);
        });

        it('should return the product when one number is zero', () => {
            const result = service.multiplication(0, 5);
            expect(result).toBe(0);
        });

        it('should return the product when both numbers are negative', () => {
            const result = service.multiplication(-2, -3);
            expect(result).toBe(6);
        });

        it('should return the product when one number is negative', () => {
            const result = service.multiplication(-2, 3);
            expect(result).toBe(-6);
        });

        it('should return the product when both numbers are negative', () => {
            const result = service.multiplication(-2, -3);
            expect(result).toBe(6);
        });
    });

    describe('division', () => {
        it('should return the quotient of two numbers', () => {
            const result = service.division(6, 3);
            expect(result).toBe(2);
        });

        it('should throw an error when dividing by zero', () => {
            expect(() => service.division(6, 0)).toThrowError('Division by zero is not allowed');
        });

        it('should return the quotient when the dividend is zero', () => {
            const result = service.division(0, 3);
            expect(result).toBe(0);
        });
    });

    describe('exponention', () => {
        it('should return the exponentiation of two numbers', () => {
            const result = service.exponention(2, 3);
            expect(result).toBe(8);
        });

        it('should return the exponentiation of a negative number', () => {
            const result = service.exponention(-2, 3);
            expect(result).toBe(-8);
        });

        it('should return the exponentiation of a negative exponent', () => {
            const result = service.exponention(2, -3);
            expect(result).toBe(0.125);
        });

        it('should return the exponentiation of two negative numbers', () => {
            const result = service.exponention(-2, -3);
            expect(result).toBe(-0.125);
        });

        it('should return the exponentiation of zero', () => {
            const result = service.exponention(0, 3);
            expect(result).toBe(0);
        });

        it('should return 1 when exponent is zero', () => {
            const result = service.exponention(2, 0);
            expect(result).toBe(1);
        });

        it('should return the exponentiation of a float number', () => {
            const result = service.exponention(2, 3);
            expect(result).toBe(8);
        });

        it('should return the exponentiation of a float exponent', () => {
            const result = service.exponention(9, 0.5);
            expect(result).toBe(3);
        });
    });
});
