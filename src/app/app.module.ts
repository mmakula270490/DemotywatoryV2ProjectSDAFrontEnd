import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AddDemotComponent } from './components/add-demot/add-demot.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/main/main.component';
import { TopBarComponent} from './components/top-bar/top-bar.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { MainTextComponent } from './components/main-text/main-text.component';
import { TopBarGenericComponent } from './top-bar-generic/top-bar-generic.component';
import { MainListComponent } from './main-list/main-list.component';

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
    SignInComponent,
    TopBarGenericComponent,
    MainListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
