import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Demotywator } from '../models/demotywator';
import { Observable } from 'rxjs';
import { GetResponseList } from '../models/GetResponseList';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*'

  })
}

@Injectable({
  providedIn: 'root'
})
export class DemotService {

  private demotyUrl: string = 'http://localhost:8080/api/posts';
  private voteUpUrl: string = '/voteUp';
  private voteDownUrl: string = '/voteDown';
  demotywator!: Demotywator;
  
   constructor(private httpClient: HttpClient) { }

  addNewPost(formData: FormData) {

    return this.httpClient.post(
          this.demotyUrl,
          formData
      );
  }





  public getDemotywatory(): Observable <GetResponseList>{
    return this.httpClient.get<GetResponseList>(`${this.demotyUrl}`, HTTP_OPTIONS);
  }
  public voteUp(id: number): Observable<Demotywator> {
    return this.httpClient.post<Demotywator>(`${this.demotyUrl}`+'/'+ id + `${this.voteUpUrl}`, HTTP_OPTIONS);
  }

  public voteDown(id: number): Observable<Demotywator>{
    return this.httpClient.post<Demotywator>(`${this.demotyUrl}`+'/'+ id + `${this.voteDownUrl}`, HTTP_OPTIONS)
  }
  
  // public getReactions(): Observable<Demotywator>{
  //   return this.httpClient.get<Demotywator>(`${this.demotyUrl}`+'/'+ id + )
  // }

}
