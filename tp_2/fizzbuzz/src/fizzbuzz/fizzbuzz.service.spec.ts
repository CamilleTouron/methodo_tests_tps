import { Test, TestingModule } from '@nestjs/testing';
import { FizzbuzzService } from './fizzbuzz.service';

describe('FizzbuzzService', () => {
  let service: FizzbuzzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FizzbuzzService],
    }).compile();

    service = module.get<FizzbuzzService>(FizzbuzzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return correct FizzBuzz string from 1 to 15', () => {
    const expected =
        '1\n' +
        '2\n' +
        'Fizz\n' +
        '4\n' +
        'Buzz\n' +
        'Fizz\n' +
        '7\n' +
        '8\n' +
        'Fizz\n' +
        'Buzz\n' +
        '11\n' +
        'Fizz\n' +
        '13\n' +
        '14\n' +
        'FizzBuzz\n';

    const result = service.fizzBuzzValues(15);

    expect(result).toBe(expected);
  });

  it('should return an empty string when n is 0', () => {
    const result = service.fizzBuzzValues(0);
    expect(result).toBe('');
  });

  it('should return an empty string when n is negative', () => {
    const result = service.fizzBuzzValues(-5);
    expect(result).toBe('');
  });

  it('should return "Fizz" for 2_000_000_001', () => {
    const result = service.fizzBuzzValue(2_000_000_001);
    expect(result).toBe('Fizz');
  });
});
