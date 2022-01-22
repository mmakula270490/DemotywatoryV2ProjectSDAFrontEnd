import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { RegistrationServiceService } from 'src/app/service/registration.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { User } from 'src/app/models/user';


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

  login!: string;
  password!: string;
  dialog!: string;

  // formdata!: FormData;

  user = { username: '', password: '', email: '' };
  formdata!: FormData;

  constructor(private registrationService: RegistrationServiceService,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {

  }

  registerUser(user: User) {
    this.registrationService.addUser(this.user)
      .then(response => {
        if (response.status == 200) {
          this.navigateToMain()
        }
        else{
          this.dialog = "Something went wrong!";
        }
      })
  }

  registrationButtonClick() {
    this.user.username = this.registrationUserName;
    this.user.email = this.registrationUserEmail;
    this.user.password = this.registrationUserPassword;

    this.registerUser(this.user);
  }

  loginButtonClick() {
    this.formdata = new FormData();
    this.formdata.append('username', this.login);
    this.formdata.append('password', this.password);
    this.loginService.loginUser(this.formdata);
  }

  navigateToMain() {
    this.router.navigateByUrl('/');
  }
}
