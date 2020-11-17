import { TestBed } from '@angular/core/testing';

import { ProposalConfigService } from './proposal-config.service';

describe('ProposalConfigService', () => {
  let service: ProposalConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProposalConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
