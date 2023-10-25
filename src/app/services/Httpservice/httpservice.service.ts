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
type IReset={
  
  email:string,
  password: string,
  confirmpassword: string
}
type Iforget={
  email:string,
 
}
type INote={
  title:string;
  description:string
 
}

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http:HttpClient) { }
  BaseURL='https://localhost:5001/api/';
  PostService(url:string,reqBody:INote|Iforget|Isignup|Ilogin|IReset|any,token:boolean,httpOption:any){
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

