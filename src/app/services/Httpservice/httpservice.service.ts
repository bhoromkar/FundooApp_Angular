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
type Iarchive={
  noteId:number;
}
type INoteupdate={
  title:string;
  description:string
  noteId:number;
 
}

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http:HttpClient) { }
  BaseURL='https://localhost:5001/api/';
  PostService(url:string,reqBody:Iarchive|INote|Iforget|Isignup|Ilogin|IReset|any,token:boolean,httpOption:any){
    console.log("reqbody",reqBody);
    console.log("reqdata",this.BaseURL+url);

    return this.http.post(this.BaseURL+url,reqBody,token && httpOption)
  
  }
  GetService(url: string,token:boolean=false,httpOptions:any){
    return this.http.get(this.BaseURL+url,token && httpOptions);
  }
  PutService(url:string,reqBody:INoteupdate|any,token:boolean,httpOption:any){
    return this.http.put(this.BaseURL+url,reqBody,token && httpOption)
  }
  PatchService(url:string,reqBody:Iarchive|any,token:boolean,httpOption:any){
    {
      console.log("reqbody",reqBody);
      console.log("reqdata",this.BaseURL+url);
  
      return this.http.patch(this.BaseURL+url,reqBody,token && httpOption)
    
    }
    
  }
  DeleteService(){

  }
}

