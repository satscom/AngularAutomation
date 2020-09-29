import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanComponent } from './loan/loan.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterUserComponent},
  {path:'loan', component:LoanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
