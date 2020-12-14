import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { IPlayer } from './models/player';
import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NbaService {
  baseUrl: string;
  teamSubject = new Subject<any>();

  constructor(private http: HttpClient) {
    this.baseUrl = `https://www.balldontlie.io/`;
   }

  // get observable by passing path
  get = (path: string): Observable<any> => {
    let url = `${this.baseUrl}${path}`;
    return this.http.get<any>(url)
  }

  // Storing data for subject
  nbaPlayers = () => {
    let url = `${this.baseUrl}/api/v1/players`;
    return this.http.get<IPlayer[]>(url).pipe(
      map(
        i => {
          return  i['data']
        }
      )
    );
  }

  getNBATeams = ():Observable<any> => {
    return this.teamSubject.asObservable();
  }
}
