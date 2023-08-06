import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import * as Aos from 'aos';
import { NgxLoader } from 'ngx-http-loader';

declare var $ : any;
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  public loader = NgxLoader;
  items : number[] = [1 , 2 , 3 , 4 , 5 ,6 ,7 ,8, 9 ,10 ];
  activeItemIndex = 0;
  trendingMovies : any[] =[];
  page : number = 1;
  imgSrc : string = `https://image.tmdb.org/t/p/w500/`;

  constructor(private _MoviesService : MoviesService){}
  ngOnInit(): void {
    Aos.init({once:true});
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getMovies();
  }

  getMovies() : void {
    this._MoviesService.getTrendingAll('movie' , this.page).subscribe((respones)=>{
      this.scrollTopAnimated();
      this.trendingMovies = respones.results;
    })
  }
  getPageNumber(event : any):void {
    this.page = event.target.innerText;
  }
  getPrePage() : void{
    if(this.page > 1){
      --this.page;
      this.getMovies();
    }
  }
  getNextPage() : void {
    if(this.page < 10 ){
      ++this.page;
      this.getMovies();
    }
  }
   scrollTopAnimated(): void{
    $("html, body").animate({ scrollTop: "0" } , 'smooth');
}
}
