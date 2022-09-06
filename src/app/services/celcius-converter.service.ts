import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CelciusConverterService {

  constructor() { }
  
  convertToFahrenheit(C: number): number{
    return  ((9/5)*(C)) + 32;
  }

  convertToKelvin(C: number): number{
    return  C + 273;
  }
}

