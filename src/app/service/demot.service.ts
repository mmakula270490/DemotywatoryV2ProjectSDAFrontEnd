import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Demotywator } from '../models/demotywator';
import { Observable } from 'rxjs';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class DemotService {

  private demotyUrl: string = 'http://localhost:8080/api/posts';
  private demotyLimit: string = '?_limit=5';

  demotywator: Demotywator[] = [];
  
  constructor(private httpClient: HttpClient) { }

  public getDemotywatory(): Observable<Demotywator[]>{
    return this.httpClient.get<Demotywator[]>(`${this.demotyUrl}${this.demotyLimit}`, HTTP_OPTIONS);
}
}
