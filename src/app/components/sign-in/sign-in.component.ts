import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  errorMessege = '';
  registrationUserName: string = '';
  registrationUserEmail: string = '';
  registrationUserPassword: string = '';
  registrationUserRepeatedPassword: string = '';

  user = {username: '', password: '', email: ''};

  constructor(private registrationService: RegistrationServiceService) { }

  ngOnInit(): void {
    
  }

  registerUser(){
    this.registrationService.addUser(this.user)
      .subscribe(user => {
        
      },
      error => this.errorMessege = error);
      console.log(this.user)
  }

  

  registrationButtonClick(){
    this.user.username = this.registrationUserName;
    this.user.email = this.registrationUserEmail;
    this.user.password = this.registrationUserPassword;
    this.registerUser();
  }

}
