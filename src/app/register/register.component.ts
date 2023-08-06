import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxLoader } from 'ngx-http-loader';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  public loader = NgxLoader;
  error = null;
  registerForm: FormGroup = new FormGroup({
    // first_name : new FormControl(null , [Validators.required , Validators.maxLength(20) , Validators.minLength(5)]) ,
    // last_name : new FormControl(null , [Validators.required , Validators.maxLength(20) , Validators.minLength(5)]) ,
    email: new FormControl(null, [Validators.required, Validators.email]),
    // age : new FormControl(null , [  Validators.required , Validators.max(80) , Validators.min(18)]) ,
    password: new FormControl(null, [Validators.required, Validators.pattern(`^[a-z | A-Z]{6}$`)]),
    returnSecureToken: new FormControl(true)
  })
  constructor(public _AuthService: AuthService, public _Router: Router ,
    public translate : TranslateService) { }

  submitRegister(registerForm: FormGroup) {
    if (this.registerForm.valid) {
      this._AuthService.registerProcess(registerForm.value).subscribe((data) => {
        if (data.idToken) {
          this._Router.navigate(['Login'])
          this.showSuccess();
        }
      },
        (error) => {
          this.error = (error.error.error.message);
          this.showSuccess();
        })
    }
  }

   showSuccess() {
    if(this.error == null){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your account successfully created !',
        text : 'Please log in to continue to the Trending Movies' ,
        showConfirmButton: false,
        confirmButtonText: 'Cool' ,
        timer: 3000
      })
    }else{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: this.error,
        text : 'Something went wrong trying to create your account.' ,
        showConfirmButton: false,
        confirmButtonText: 'Cool',
        timer: 3000
      })
    }
  }
  errorDelete() : void {
    if(this.error){
      this.error = null;
    }
  }
}
