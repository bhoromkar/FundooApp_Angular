import { HttpserviceService } from './../Httpservice/httpservice.service';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { NONE_TYPE, Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {


  constructor(private httpservice:HttpserviceService) { }
  loginService(reqdata:any){
    console.log(reqdata);
    const httpOptions={
    Headers:new HttpHeaders({
      'Content-Type':'application/json',
      Authorization:'my-auth-token'//token

    })
    };
    return this.httpservice.PostService('User/Login',reqdata,false,httpOptions);
  }

  signupService(reqpayload:any) {
   console.log(reqpayload);
   const httpOptions={
    Headers:new HttpHeaders({
      'Content-Type':'application/json',
      Authorization:'my-auth-token'//token

    })
    };
   return this.httpservice.PostService('User/Register',reqpayload,false,httpOptions);
  }
  ResetPasswordService(reqpayload:any) {
    console.log(reqpayload);
    const httpOptions={
     Headers:new HttpHeaders({
       'Content-Type':'application/json',
       Authorization:'my-auth-token'//token
 
     })
     };
    return this.httpservice.PostService('User/ResetPassword',reqpayload,true,httpOptions);
  }
 forgetPasswordService(reqbbpayload:any) {
    console.log(reqbbpayload);
    const httpOptions={
     Headers:new HttpHeaders({
       'Content-Type':'application/json',
       //Authorization:'my-auth-token'//token
 
     })
     };
    return this.httpservice.PostService('User/ForgotPassword?email='+(reqbbpayload.email),reqbbpayload,false,httpOptions);
     
    } 
}
