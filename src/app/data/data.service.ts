import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConverterData } from './converter-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = "https://localhost:7210/api/history";
  constructor(private http: HttpClient) { }

  postTemperatureConvertForm(converterData: ConverterData): Observable<any>{
    return this.http.post(this.url, converterData);
  }

}
