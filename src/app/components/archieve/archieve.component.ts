import { Token } from '@angular/compiler';
import { NotesserviceService } from 'src/app/services/noteservice/notesservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent {
  token:any;
  notesArray:any;
  archivenotes:any=[];

  constructor(private noteservice:NotesserviceService){
  this.token=localStorage.getItem('token')}
  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes(){
  
    this.noteservice.getallnotes().subscribe((request:any)=> {
      console.log("request data", request);
      console.log("request data", request.result);
      this.notesArray = request.result;
    this.notesArray =  this.notesArray.filter((notedata:any)=>{
        if(notedata.isArchive!=false){
          this.archivenotes.push(notedata);
        }
console.log(this.archivenotes);
    },(error: any) => {
      console.log("Error", error);
    });
    
  })
}
}




