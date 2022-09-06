import { Injectable } from '@angular/core';
import { ConverterData } from '../data/converter-data';
import { CelciusConverterService } from './celcius-converter.service';
import { FahrenheitConverterService } from './fahrenheit-converter.service';
import { KelvinConverterService } from './kelvin-converter.service';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor(private celciusConverterService: CelciusConverterService,
      private fahrenheitCoverterService: FahrenheitConverterService,
      private kelvinConverterService: KelvinConverterService
    ) { }
  
  convert(converterData: ConverterData): ConverterData{
    converterData.outputValue = this.formulaMapper(converterData);
    return converterData;
  }

  formulaMapper(converterData: ConverterData):number{
    switch(converterData.inputType) {
      case "C":
        if(converterData.outputType == 'F'){
          return this.celciusConverterService.convertToFahrenheit(converterData.inputValue);
        }
        else{
          return this.celciusConverterService.convertToKelvin(converterData.inputValue);
        }
      case "F":
        if(converterData.outputType == 'C'){
          return this.fahrenheitCoverterService.convertToCelcius(converterData.inputValue);
        }
        else{
          return this.fahrenheitCoverterService.convertToKelvin(converterData.inputValue);
        }
      default:
        if(converterData.outputType == 'C'){
          return this.kelvinConverterService.convertToCelcius(converterData.inputValue);
        }
        else{
          return this.kelvinConverterService.convertToFahrenheit(converterData.inputValue);
        }
    }
  }

}

