import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userInfo } from 'os';
import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _registerUrl = "http://localhost:3000/api";
  constructor(private http: HttpClient) { }

  registeruser(user:any) {
    return this.http.post<any>(`${this._registerUrl}`+'/createUser',user);
  }
  loginuser(userlogin:any){
    return this.http.post<any>(`${this._registerUrl}`+'/checkUser',userlogin);
  }
}
// Add authentication service
// Add token handling to auth service
// Improve error handling in auth service
