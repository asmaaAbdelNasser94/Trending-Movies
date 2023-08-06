import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiKey :string = '1ff94b0d08963842c40055595e116121';
  query : string = '';
  constructor(private _HttpClient : HttpClient ) { }

  getTrendingAll(mediaType:string , page : number = 1) : Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${this.apiKey}&page=${page}`)
  }
  getMoviesDetailes(movie_id:string) : Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${this.apiKey}&language=en-US`)
  }
  getTvDetailes(tv_id : string) : Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=${this.apiKey}&language=en-US`)
  }
  searchMulti(query : string) : Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&language=en-US&page=1&include_adult=false&query=${query}`)
  }
}
