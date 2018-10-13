import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

@Injectable()
export class HttpService {
  BASE_URL : String = "https://jsonplaceholder.typicode.com/"; 
  constructor(private _http : Http) { }

  get(url) {
    this._http.get(this.BASE_URL + url).subscribe(
        response => {
            return response.json();
        }, error => {
            console.error(error);
        });
  }

  save(url, data) {
    this._http.post(this.BASE_URL + url, data).subscribe(
      response => {
          return response.json();
      }, error => {
             console.error(error);
        });
  }
}
