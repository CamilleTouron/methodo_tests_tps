import { Test, TestingModule } from '@nestjs/testing';
import { CalculatriceService } from './calculatrice.service';

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

  it('should return the sum of two numbers', () => {
      const result = service.somme(2, 3);
      expect(result).toBe(5);
  });

  it('should return the difference of two numbers', () => {
      const result = service.soustraction(5, 3);
      expect(result).toBe(2);
  });
});
