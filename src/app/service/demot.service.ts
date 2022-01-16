import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Demotywator } from '../models/demotywator';
import { Observable } from 'rxjs';
import { GetResponseList } from '../models/GetResponseList';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DemotService {

  private demotyUrl: string = 'http://localhost:8080/api/posts';

  demotywator!: Demotywator;

  constructor(private httpClient: HttpClient) { }

  addNewPost(demotywator: Demotywator): Observable<Demotywator> {

    console.log(demotywator);
    return this.httpClient.post<Demotywator>(
      this.demotyUrl,
      demotywator,
      HTTP_OPTIONS
    )
  }

  public getDemotywatory(): Observable<GetResponseList> {
    return this.httpClient.get<GetResponseList>(`${this.demotyUrl}`, HTTP_OPTIONS);
  }

  public voteUp(id: number): Observable<Demotywator> {
    return this.httpClient.post<GetResponseList>(`${this.demotyUrl}+/+${id}+/reactions/voteUp', HTTP_OPTIONS);
  }
}
