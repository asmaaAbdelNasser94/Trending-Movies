import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { MovieDetailesComponent } from './movie-detailes/movie-detailes.component';
import { TvDetailsComponent } from './tv-details/tv-details.component' ;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './header/header.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { FooterComponent } from './footer/footer.component';
import { TvComponent } from './tv/tv.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxHttpLoaderModule } from 'ngx-http-loader';
import { SeeMorePipe } from './see-more.pipe';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SearchComponent } from './search/search.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    MoviesComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    NavbarComponent,
    MoviesDetailsComponent,
    MovieDetailesComponent,
    TvDetailsComponent,
    HeaderComponent,
    NotificationsComponent,
    PrivacyComponent,
    FooterComponent,
    TvComponent,
    SeeMorePipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    ReactiveFormsModule ,
    HttpClientModule ,
    BrowserAnimationsModule ,
    CarouselModule ,
    NgxPaginationModule ,
    NgxHttpLoaderModule.forRoot() ,
    SweetAlert2Module.forRoot() ,
    FormsModule ,
    TranslateModule.forRoot({
      defaultLanguage : 'en' ,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(_httpClient : HttpClient){
  return new TranslateHttpLoader(_httpClient, './assets/i18n/', '.json');
}
