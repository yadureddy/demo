import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareersComponent } from './careers/careers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [ 
  { path:"",component: HomeComponent },
  { path: "login",component: LoginComponent},
  { path:"register",component: RegisterComponent },
  { path:"contacts",component: ContactsComponent},
  { path:"careers",component: CareersComponent},
  { path: "**", component: NotfoundComponent},
  // {path : "**" , redirectTo: ''}, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
