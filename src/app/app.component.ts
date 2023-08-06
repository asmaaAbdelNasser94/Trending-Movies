import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentLang!: any;
  title = 'TrendingMoviesProject';
  constructor(public translate : TranslateService){
    this.currentLang = localStorage.getItem('currentLang')
    translate.setDefaultLang(this.currentLang);
    if(this.currentLang == 'ar'){
      document.dir = 'rtl';
    }else{
      document.dir = 'ltr';
    }
  }

}
