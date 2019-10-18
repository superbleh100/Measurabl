import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  private xqrsEndpoint = 'https://api.myjson.com/bins/xqrsi';
  private szayaEndpoint = 'https://api.myjson.com/bins/szaya';

  constructor(private http: HttpClient) { }

  public getPeople(): Observable<Array<Array<Person>>> {
    const response1 = this.http.get<Person[]>(this.xqrsEndpoint);
    const response2 = this.http.get<Person[]>(this.szayaEndpoint);

    return forkJoin([response1, response2]);
  }
}
