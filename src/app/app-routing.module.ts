import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDemotComponent } from './add-demot/add-demot.component';
import { MainComponent } from './main/main.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'addNew', component: AddDemotComponent},
    { path: 'login', component: SignInComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
