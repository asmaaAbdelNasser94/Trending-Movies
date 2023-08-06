import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLogin: boolean = false;
  constructor(private _AuthService:AuthService , public traslate:TranslateService){}
  ngOnInit(): void {

    $(document).ready(function(){
      $('.dropdown-item').click(function(){
        $('.navbar div').removeClass('show');
     });
     $('.single').click(function(){
            $('.navbar div').removeClass('show');
     });
    })
    this._AuthService.userData.subscribe(()=>{
      if(this._AuthService.userData.getValue() !== null){
        this.isLogin = true;
      }else{
        this.isLogin = false;
      }
    })
  }
  logOut(){
    this._AuthService.logOut();
  }
  changeLang(lang:string){
    this.traslate.use(lang);
    localStorage.setItem('currentLang' , lang)
    }

}
