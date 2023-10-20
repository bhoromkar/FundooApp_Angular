import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
type Ilogin={
  email:string,
  password: string
}
type Isignup={
  firstname:string,
  lastname: string,
  email:string,
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http:HttpClient) { }
  BaseURL='https://localhost:5001';
  PostService(url:string,reqBody:Isignup|Ilogin|any,token:boolean,httpOption:any){
    console.log("reqbody",reqBody);
    console.log("reqdata",this.BaseURL+url);

    return this.http.post(this.BaseURL+url,reqBody,token && httpOption)
  
  }
  GetService(){

  }
  PutService(){
    
  }
  PatchService(){
    
  }
  DeleteService(){

  }
}

