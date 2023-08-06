import * as Aos from 'aos';
import { MoviesService } from './../movies.service';
import { Component } from '@angular/core';
import { NgxLoader } from 'ngx-http-loader';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public loader = NgxLoader;
  trendingMovies: any[] = [];
  page : number = 1;
  trendingTv: any[] = [];
  trendingPerson: any[] = [];
  imgSrc : string = `https://image.tmdb.org/t/p/w500/`;
  constructor(private _MoviesService: MoviesService) {

   }
  ngOnInit(): void {
    Aos.init({once:true})
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this._MoviesService.getTrendingAll('movie').subscribe((response) => {
      this.trendingMovies = (response.results).slice(0,10);
    })
    this._MoviesService.getTrendingAll('tv').subscribe((response)=>{
      this.trendingTv = (response.results).slice(0,10);
    })
    this._MoviesService.getTrendingAll('person').subscribe((response)=>{
      this.trendingPerson = (response.results).slice(0,10);
    })
  }
}
