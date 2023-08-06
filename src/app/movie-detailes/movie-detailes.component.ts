import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MoviesService } from '../movies.service';

import * as Aos from 'aos';
import { NgxLoader } from 'ngx-http-loader';
@Component({
  selector: 'app-movie-detailes',
  templateUrl: './movie-detailes.component.html',
  styleUrls: ['./movie-detailes.component.scss']
})
export class MovieDetailesComponent implements OnInit {
  someSubscription: any;
  public loader = NgxLoader;
  movieId : string = '';
  movieDetailes : any = {};
  backgroundSrc : string = 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces'
  imgSrc : string = `https://image.tmdb.org/t/p/w500/`;
  constructor(private _ActivatedRoute : ActivatedRoute ,
    private _MoviesService : MoviesService ,
   private _Router : Router){}
  ngOnInit(): void {
    Aos.init({once:true})
    this._ActivatedRoute.params.subscribe(() => {
      this.movieId = this._ActivatedRoute.snapshot.params['id'];
      this._MoviesService.getMoviesDetailes(this.movieId).subscribe((response)=>{
        this.movieDetailes = response;
      })
    })

  }
}
