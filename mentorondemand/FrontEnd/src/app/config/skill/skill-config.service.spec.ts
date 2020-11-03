import { TestBed } from '@angular/core/testing';

import { SkillConfigService } from './skill-config.service';

describe('SkillConfigService', () => {
  let service: SkillConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
