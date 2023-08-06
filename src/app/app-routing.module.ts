import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { MovieDetailesComponent } from './movie-detailes/movie-detailes.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { TvComponent } from './tv/tv.component';
import { LoginGuardGuard } from './login-guard.guard';

const routes: Routes = [
  {path : '' , redirectTo : 'Home' , pathMatch : 'full'} ,
  {path : 'Home' , canActivate : [AuthGuardGuard], component : HomeComponent} ,
  {path : 'About' , canActivate : [AuthGuardGuard], component : AboutComponent} ,
  {path : 'Movies' , canActivate : [AuthGuardGuard], component : MoviesComponent} ,
  {path : 'Tv' , canActivate : [AuthGuardGuard], component : TvComponent} ,
  {path : 'Contacts' , canActivate : [AuthGuardGuard], component : ContactsComponent} ,
  {path : 'Register' ,canActivate : [LoginGuardGuard], component : RegisterComponent} ,
  {path : 'Login' ,canActivate : [LoginGuardGuard], component : LoginComponent} ,
  {path : 'movieDetails/:id' , canActivate : [AuthGuardGuard] , component : MovieDetailesComponent} ,
  {path : 'tvDetails/:id' , canActivate : [AuthGuardGuard] , component : TvDetailsComponent} ,
  {path: 'Settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)},
  {path : '**' , component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { useHash : true , onSameUrlNavigation : 'reload'} )],
  exports: [RouterModule] ,
  providers: [
  ]
})
export class AppRoutingModule { }
