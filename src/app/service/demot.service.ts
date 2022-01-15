import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Demotywator } from '../models/demotywator';
import { Observable } from 'rxjs';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control' : 'no-cache'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DemotService {

  private demotywatoryUrl: string = 'http://localhost:8080/api/posts';
 // private demotyLimit: string = '?_limit=5';

  // demotywator: Demotywator[] = [];
  
   constructor(private httpClient: HttpClient) { }

  // public getDemotywatory(): Observable<Demotywator[]>{
  //   return this.httpClient.get<Demotywator[]>(`${this.demotywatoryUrl}${this.demotyLimit}`, HTTP_OPTIONS);
  // }

  addNewPost(demotywator: Demotywator): Observable<Demotywator>{

    console.log(demotywator);
    return this.httpClient.post<Demotywator>(
          this.demotywatoryUrl,
          demotywator,
          HTTP_OPTIONS
      )
  }
}
