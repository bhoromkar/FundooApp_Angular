import { NgFor } from '@angular/common';
import { Component, Output,EventEmitter, OnInit } from '@angular/core';
import { NotesserviceService } from 'src/app/services/noteservice/notesservice.service';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})

export class GetallnotesComponent implements OnInit { 
  
 get!: FormGroup;
  token:any;
  notesArray :any=[];
  Array :any=[];
  resposne:any;
  // :any=[];
  @Output() Displaynotes= new EventEmitter<any>;
  singlenote:any;
  // messageOFPARENT="hello world"
 
  constructor(private noteservice:NotesserviceService) { 
    this.token = localStorage.getItem('token');
  }
 

  ngOnInit(): void {
    this.getAllNotes()
  }
 

  getAllNotes(){
    this.noteservice.getallnotes().subscribe((request:any)=> {
      console.log("request data", request);
      console.log("request data", request.result);
      this.Array = request.result;
           this.Array.filter((notedata:any)=>{
          if(notedata.isArchive === false && notedata.isTrash ===false){
         this.notesArray.push(notedata);

          }
         


      
      })
      console.log("request data", this.notesArray);
      
    })
   
  }
  receiveMessagefromdisplaycard($event: any) {
    console.log("insidegetallnotes", $event);
    this.resposne=$event.result;
    if(this.resposne!=null){
  this.notesArray.push(this.resposne);
     console.log(this.resposne);
    }
    
     
  }
}
