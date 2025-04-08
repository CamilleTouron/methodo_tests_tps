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
});
