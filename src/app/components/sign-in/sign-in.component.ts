import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  registrationUserName: String = '';
  registrationUserEmail: String = '';
  registrationUserPassword: String = '';
  registrationUserRepeatedPassword: String = '';

  registrationButtonClick(){
    console.log(
      'login', this.registrationUserName,
      'email',this.registrationUserEmail,
      'password',this.registrationUserPassword,
      'repatedPassword',this.registrationUserRepeatedPassword,
    );
  }

}
