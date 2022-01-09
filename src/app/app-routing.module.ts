import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDemotComponent } from './add-demot/add-demot.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'addNew', component: AddDemotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
