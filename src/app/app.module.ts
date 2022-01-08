import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AddDemotComponent } from './add-demot/add-demot.component';
import { MainComponent } from './main/main.component';
import { TopBarComponent} from './top-bar/top-bar.component';
 
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    AddDemotComponent,
    MainComponent,
    TopBarComponent
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
