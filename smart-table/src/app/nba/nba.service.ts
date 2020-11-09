import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NbaService {
  baseUrl: string;
  teamSubject = new Subject<any>();

  constructor(private http: HttpClient) {
    this.baseUrl = `https://www.balldontlie.io/`;
    this.nbaData();
   }

  // get observable by passing path
  get = (path: string): Observable<any> => {
    let url = `${this.baseUrl}${path}`;
    return this.http.get<any>(url)
  }

  // Storing data for subject
  nbaData = () => {
    let url = `${this.baseUrl}/api/v1/teams`;
    this.http.get<any>(url).subscribe(data => {
      this.teamSubject.next(data.data)
    })
  }

  getNBATeams = ():Observable<any> => {
    return this.teamSubject.asObservable();
  }
}
