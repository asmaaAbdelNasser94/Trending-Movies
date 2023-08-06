import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgxLoader } from 'ngx-http-loader';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loader = NgxLoader;
  error :BehaviorSubject<string> = new BehaviorSubject<string>('');
  clicked : boolean = false;
  isLogin : BehaviorSubject<boolean> = new BehaviorSubject(false);
  loginForm : FormGroup = new FormGroup({
    email : new FormControl(null , [Validators.required , Validators.email]) ,
    password : new FormControl(null , [Validators.required , Validators.pattern(`^[a-z | A-Z]{6}$`)])
  })
  constructor(public _AuthService : AuthService , public _Router :Router ,
    public translate : TranslateService ){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // if(localStorage.getItem('userToken')){
    //   localStorage.removeItem('userToken');
    // }
  }
  getLoginData(loginForm : FormGroup){
    if(this.loginForm.valid){
      this._AuthService.loginProcess(loginForm.value).subscribe((data)=>{
        if(data.idToken){
          localStorage.setItem('userToken' , data.idToken);
          this._AuthService.getUserData();
          this._Router.navigate(['Home']);
          this.isLogin.next(true);
          this.showSuccess()
        }
      }
      ,(error)=>{
        this.error.next(error.error.error.message);
        this.showSuccess()
      }
      )
    }
  }
  loginClicked() : void {
    this.clicked = !this.clicked;
  }
  errorDelete() : void {
    if(this.error.getValue()){
      this.error.next('');
      this.clicked = false;
    }
  }

  showSuccess() {
    if(this.error.getValue() == ''){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        text: 'You are successfully logged in',
        title : 'Welcome to Trending Movies ' ,
        showConfirmButton: false,
        confirmButtonText: 'Cool' ,
        timer: 3000
      })
    }else{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: this.error.getValue(),
        text : 'Something went wrong trying to login your account.' ,
        showConfirmButton: false,
        confirmButtonText: 'Cool',
        timer: 3000
      })
    }
  }
}
