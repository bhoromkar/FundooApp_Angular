import { HttpserviceService } from './../Httpservice/httpservice.service';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { NONE_TYPE } from '@angular/compiler';

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
    return this.httpservice.PostService('/api/User/Login',reqdata,false,httpOptions).subscribe((res)=>{
      console.log(res)});
  }

  signupService(reqpayload:any) {
   console.log(reqpayload);
   const httpOptions={
    Headers:new HttpHeaders({
      'Content-Type':'application/json',
      Authorization:'my-auth-token'//token

    })
    };
   return this.httpservice.PostService('/api/User/Register',reqpayload,false,httpOptions).subscribe((res)=>{
    console.log(res)});
  }
  }

