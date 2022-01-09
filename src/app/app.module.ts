import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AddDemotComponent } from './components/add-demot/add-demot.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/main/main.component';
import { TopBarComponent} from './components/top-bar/top-bar.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { MainTextComponent } from './components/main-text/main-text.component';

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
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
