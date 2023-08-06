import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';
import { AuthGuardGuard } from '../auth-guard.guard';
import { NotificationsComponent } from '../notifications/notifications.component';
import { PrivacyComponent } from '../privacy/privacy.component';

const routes: Routes = [
  {path : '' , canActivate : [AuthGuardGuard] , component : ProfileComponent } ,
  {path : 'Profile' , canActivate : [AuthGuardGuard] , component : ProfileComponent} ,
  {path : 'Password' , canActivate : [AuthGuardGuard] , component : PasswordComponent} ,
  {path : 'Notifications' , canActivate : [AuthGuardGuard] , component : NotificationsComponent} ,
  {path : 'Privacy' , canActivate : [AuthGuardGuard] , component : PrivacyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
