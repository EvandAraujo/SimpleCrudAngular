import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationOfPeopleListComponent } from './registration-of-people/registration-of-people-list/registration-of-people-list.component';

const routes: Routes = [{
  path: '',
  component: RegistrationOfPeopleListComponent,
}];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
