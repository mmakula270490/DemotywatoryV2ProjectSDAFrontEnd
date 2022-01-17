import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl = 'http://localhost:8080/login'

  constructor(private http: HttpClient) { }

  loginUser(formdata: FormData){
    // debugger;
    return this.http.post(this.loginUrl,formdata).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

}
