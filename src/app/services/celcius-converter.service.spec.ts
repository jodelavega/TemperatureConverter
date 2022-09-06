import { TestBed } from '@angular/core/testing';

import { CelciusConverterService } from './celcius-converter.service';

describe('CelciusConverterService', () => {
  let service: CelciusConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CelciusConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
