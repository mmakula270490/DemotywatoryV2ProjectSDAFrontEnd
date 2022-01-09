import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AddDemotComponent } from './add-demot/add-demot.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { TopBarComponent } from './main/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    AddDemotComponent,
    MainComponent,
    TopBarComponent,
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
