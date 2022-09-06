import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KelvinConverterService {

  constructor() { }
  
  convertToCelcius(K: number): number{
    return  K - 273.15;
  }

  convertToFahrenheit(K: number): number{
    return  ((9/5)*(K - 273)) + 32;
  }
}
