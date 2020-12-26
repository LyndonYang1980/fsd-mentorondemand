import { TestBed } from '@angular/core/testing';

import { TrainingConfigService } from './training-config.service';

describe('TrainingConfigService', () => {
  let service: TrainingConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
