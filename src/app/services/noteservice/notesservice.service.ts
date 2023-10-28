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
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      Authorization: 'Bearer '  + this.token,

    })
    };
    return this.httpservice.PostService('Note/Create', reqdata, true, httpOPtions);
  }
  
  getallnotes(){
    this.id = localStorage.getItem("user_id");
    // let data ={
    //   userId :this.id
    //   }
    //   console.log(data,"data")
      this.token=localStorage.getItem('token');
      const httpOptions={
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          Authorization: 'Bearer '  + this.token,//token
    
        })
        };
        return this.httpservice.GetService('Note/GetAll', true, httpOptions);

}
ArchieveNotes(reqdata:any){
  this.token=localStorage.getItem('token');
      const httpOptions={
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          Authorization: 'Bearer '  + this.token,//token
    
        })
        };
        return this.httpservice.PostService('Note/Archieve',reqdata, true, httpOptions);

}
}


