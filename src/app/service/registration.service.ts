import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {
  registrationUrl = 'http://localhost:8080/api/users'

  constructor(private http: HttpClient) { }
  
  addUser(user: User): Observable<User>{
    let httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json',
        'Cache-Control' : 'no-cache'
    });

    return this.http.post(this.registrationUrl, user, {headers: httpHeaders}).pipe(
      map(this.extractData),
      catchError(this.handleErrorObservable)
    )
  };

  private extractData(res: any) {
    let body = res;
    return body;
  }
  private handleErrorObservable(error: any) {
    console.error(error.message || error);
    return throwError(error);
  } 

}
