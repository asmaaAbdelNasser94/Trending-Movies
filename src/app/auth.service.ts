import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData = new BehaviorSubject(null);
  apiKey : string = 'AIzaSyAGEVyVXV6wEq8stbLO07J0w2X3jhPk220';
  constructor(private _HttpClient : HttpClient , private _Router:Router) {
    if(localStorage.getItem('userToken') !== null){
      this.getUserData();
    }
  }

  registerProcess(formData : object) : Observable<any> {
    return this._HttpClient.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}` , formData)
  }
  loginProcess(formData : object) : Observable<any>{
    return this._HttpClient.post( `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`, formData)
  }
  getUserData(){
    let userEncodedData = JSON.stringify(localStorage.getItem('userToken'));
    this.userData.next(jwtDecode(userEncodedData));
  }
  logOut() {
    localStorage.removeItem('userToken')
    this.userData.next(null)
    this._Router.navigate(['Login'])
  }
}
