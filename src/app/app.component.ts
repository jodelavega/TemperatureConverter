import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConverterData } from 'src/app/data/converter-data';
import { ConverterService } from './services/converter.service';
import { DataService } from './data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Temperature-Converter';

  converterData: ConverterData = {
    inputType: 'C',
    outputType: 'F',
    inputValue: 100,
    outputValue: 0
  }

  constructor(private dataService: DataService,
    private converterService: ConverterService 
  ){}

  onSubmit(form: NgForm){
    if(this.converterData.inputType == this.converterData.outputType){
      form.controls['outputType'].setErrors({'incorrect': true});
    }

    if( this.converterData.inputType.length > 1){
      form.controls['inputType'].setErrors(null);
    }

    if( this.converterData.outputType.length > 1){
      form.controls['outputType'].setErrors(null);
    }

    this.converterData = this.converterService.convert(this.converterData);

    this.dataService.postTemperatureConvertForm(this.converterData).subscribe(
      result => console.log('success: ', result),
      error => console.log(error)
    );
  }

}
