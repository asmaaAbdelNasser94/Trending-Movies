import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import * as Aos from 'aos';
import { NgxLoader } from 'ngx-http-loader';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent {
  public loader = NgxLoader;
  tvId : string = '';
  tvDetails : any = {};
  imgSrc : string = `https://image.tmdb.org/t/p/w500/`;
  backgroundSrc : string = 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces'
  constructor(private _ActivatedRoute: ActivatedRoute ,
     private _MoviesService: MoviesService) { }
    ngOnInit(): void {
      Aos.init({once : true})
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this._ActivatedRoute.params.subscribe(() =>{
        this.tvId = this._ActivatedRoute.snapshot.params['id'];
        this._MoviesService.getTvDetailes(this.tvId).subscribe((response)=>{
         this.tvDetails = response ;
        })
      })

    }
}
