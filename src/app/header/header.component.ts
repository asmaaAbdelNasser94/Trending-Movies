import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
@Input() trendingMovies : any[] = []
imgSrc : string = `https://image.tmdb.org/t/p/w500/`;
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  smartSpeed : 750 ,
  autoplay : true ,
  autoplayTimeout  : 2000 ,
  fluidSpeed : true ,
  autoplayHoverPause : true ,
  navText: ['', ''],
  responsive: {
    0: {
      items: 2
    },
    400: {
      items: 3
    },
    740: {
      items: 5
    },
    940: {
      items: 6
    }
  },
  nav: true
}
}
