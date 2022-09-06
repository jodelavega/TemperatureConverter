import { TestBed } from '@angular/core/testing';

import { FahrenheitConverterService } from './fahrenheit-converter.service';

describe('FahrenheitConverterService', () => {
  let service: FahrenheitConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FahrenheitConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
