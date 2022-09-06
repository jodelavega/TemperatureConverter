import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FahrenheitConverterService {

  constructor() { }
  
  convertToCelcius(F: number): number{
    return  (F - 32)/1.80;
  }

  convertToKelvin(F: number): number{
    return  ((5/9)*(F - 32)) + 273.15;
  }
}
