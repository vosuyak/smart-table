import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NbaService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `https://www.balldontlie.io/`;
   }

  get = (path: string): Observable<any> => {
    let url = `${this.baseUrl}${path}`;
    return this.http.get<any>(url)
  }
}
