import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AddDemotComponent } from './add-demot/add-demot.component';
import { MainComponent } from './main/main.component';
import { TopBarComponent} from './main/top-bar/top-bar.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { MainTextComponent } from './main-text/main-text.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    AddDemotComponent,
    MainComponent,
    TopBarComponent,
    LoginButtonComponent,
    AddButtonComponent,
    MainTextComponent,
    
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
