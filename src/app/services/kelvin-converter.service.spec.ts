import { TestBed } from '@angular/core/testing';

import { KelvinConverterService } from './kelvin-converter.service';

describe('KelvinConverterService', () => {
  let service: KelvinConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KelvinConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
