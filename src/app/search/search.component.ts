import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  mediaType = '';
  imgSrc : string = `https://image.tmdb.org/t/p/w500/`;
  query : string = '';
  searchResult : any[] = [];
  isClicked : boolean = false;
  constructor(private _MoviesService : MoviesService){}
  searchProcess(query : string) : void{
    this._MoviesService.searchMulti(query).subscribe((response)=>{
      this.searchResult = response.results;
    })
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  getMediaType(media : string) : string {
    return this.mediaType = `${media}Details`;
  }
}
