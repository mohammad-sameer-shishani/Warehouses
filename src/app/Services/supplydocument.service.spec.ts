import { TestBed } from '@angular/core/testing';

import { SupplydocumentService } from './supplydocument.service';

describe('SupplydocumentService', () => {
  let service: SupplydocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplydocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
