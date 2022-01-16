import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl = 'http://localhost:8080/logged'

  constructor(private http: HttpClient) { }

  

}
