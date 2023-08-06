import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import * as Aos from 'aos';
import { NgxLoader } from 'ngx-http-loader';
declare var $ : any;

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent {
  public loader = NgxLoader;
  items : number[] = [1 , 2 , 3 , 4 , 5 ,6 ,7 ,8, 9 ,10 ];
  activeItemIndex = 0;
  trendingTv: any[] = [];
  imgSrc : string = `https://image.tmdb.org/t/p/w500/`;
  page : number = 1;
  constructor(private _MoviesService : MoviesService){}
  ngOnInit(): void {
    Aos.init({once:true});
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getTvShows();
  }
  getTvShows(){
    this._MoviesService.getTrendingAll('tv' , this.page).subscribe((response)=>{
      this.scrollTopAnimated();
      this.trendingTv = response.results;
    })
  }
  getPageNumber(event : any):void {
    this.page = event.target.innerText;
  }
  getPrePage() : void{
    if(this.page > 1){
      --this.page;
      this.getTvShows();
    }
  }
  getNextPage() : void {
    if(this.page < 10 ){
      ++this.page;
      this.getTvShows();
    }
  }
  scrollTopAnimated(): void{
    $("html, body").animate({ scrollTop: "0" } , 'smooth');
}
}

