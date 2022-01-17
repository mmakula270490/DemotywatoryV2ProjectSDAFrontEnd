import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { RegistrationServiceService } from 'src/app/service/registration.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  errorMessege = '';
  registrationUserName!: string;
  registrationUserEmail!: string;
  registrationUserPassword!: string;
  
  login! : string;
  password! : string;

  // formdata!: FormData;

  user = {username: '', password: '', email: ''};
  formdata!: FormData;

  constructor(private registrationService: RegistrationServiceService, private loginService: LoginService) { }

  ngOnInit(): void {
    
  }

  registerUser(){
    this.registrationService.addUser(this.user)
      .subscribe(user => {
      },
      error => this.errorMessege = error);
  }

  registrationButtonClick(){
    this.user.username = this.registrationUserName;
    this.user.email = this.registrationUserEmail;
    this.user.password = this.registrationUserPassword;
    this.registerUser();
  }

  loginButtonClick(){
    this.formdata = new FormData();
    this.formdata.append('username', this.login);
    this.formdata.append('password', this.password);
    this.loginService.loginUser(this.formdata);
    // for (let values of this.formdata.entries()){
    //   console.log(values[0] + " , " + values[1]);
    // }
  }
}
