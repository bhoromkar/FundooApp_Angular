import { Injectable } from '@angular/core';
import { HttpserviceService } from './../Httpservice/httpservice.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NotesserviceService {

  token: any;
  id: any;
  constructor(private httpservice:HttpserviceService) { }
 

  createnote(reqdata:any){
    
    this.token=localStorage.getItem('token')
    
    const httpOPtions={
    Headers:new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: 'Bearer'  + this.token,

    })
    };
    return this.httpservice.PostService('Note/Create', reqdata, true, httpOPtions);
  }
}


