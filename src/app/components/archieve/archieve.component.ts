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
  response:any;
  noteID:any;
  archivenotes:any=[];

  constructor(private noteservice:NotesserviceService){
  this.token=localStorage.getItem('token')}
  ngOnInit(): void {
    this.getAllNotes();
    this.recievefromunarchieve(event);
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

recievefromiconstodisplaycard($event: any) {
  console.log("note archieved fromm archives", $event);
  this.response=$event.result;
  console.log(this.response);
  this.getAllNotes();
  //this.Displaynotes.emit($event)
}
recievefromunarchieve($event: any){
  console.log("note unarchieved", $event);  //noteobject
  this.response=$event;
  //this.noteID=this.response;
  this.notesArray.push(this.response);
  alert("notes unarchieve " + this.response)
  console.log("note unarchived fromm archives", $event);
  console.log(this.response);
  this.noteID=this.response.noteId;
  console.log(this.noteID);
    const index = this.archivenotes.findIndex((note:any) => note.noteId === this.noteID);
    if (index !== -1) {
      this.archivenotes.splice(index, 1); // Removes 1 element at the found index
    }
}
}



