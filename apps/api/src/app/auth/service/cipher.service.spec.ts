import { Test, TestingModule } from '@nestjs/testing';
import { CipherService } from './cipher.service';

describe('CipherService', () => {
  let service: CipherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CipherService],
    }).compile();

    service = module.get<CipherService>(CipherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
