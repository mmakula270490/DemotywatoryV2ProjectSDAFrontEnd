import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDemotComponent } from './components/add-demot/add-demot.component';
import { MainComponent } from './components/main/main.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

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
