import { Test, TestingModule } from '@nestjs/testing';
import { BowlingService } from './bowling.service';

describe('BowlingService', () => {
  let service: BowlingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BowlingService],
    }).compile();

    service = module.get<BowlingService>(BowlingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

    it('should return 300 for all strikes', () => {
        for (let i = 0; i < 12; i++) {
        service.roll(10);
        }
        expect(service.score()).toBe(300);
    });

    it('should return 150 for all spares', () => {
        for (let i = 0; i < 21; i++) {
            service.roll(5);
        }
        expect(service.score()).toBe(150);
    });

    it('should return 0 for all gutter balls', () => {
        for (let i = 0; i < 20; i++) {
            service.roll(0);
        }
        expect(service.score()).toBe(0);
    });

  it('should return 133 for mixed rolls', () => {
    const service = new BowlingService();
    service.roll(10);
    service.roll(7);
    service.roll(3);
    service.roll(9);
    service.roll(0);
    service.roll(10);
    service.roll(0);
    service.roll(8);
    service.roll(8);
    service.roll(2);
    service.roll(10);
    service.roll(9);
    service.roll(1);
    service.roll(10);
    service.roll(10);
    service.roll(10);
    service.roll(3);

    expect(service.score()).toBe(187);
  });
});
