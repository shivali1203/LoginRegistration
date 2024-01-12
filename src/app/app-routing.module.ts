import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { authGuard } from './auth.guard';

const routes: Routes = [

  {path:'login', component:UserLoginComponent },
  {path:'register', component:UserRegistrationComponent },
  {
    path:'dashboard', component:UserDashboardComponent,canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//,canActivate:[authGuard]