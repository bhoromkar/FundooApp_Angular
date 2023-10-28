import { Component } from '@angular/core';
import { NotesserviceService } from 'src/app/services/noteservice/notesservice.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent {
  token:any;
  notesArray:any;
  trashnotes:any=[];

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
        if(notedata.isTrash!=false){
          this.trashnotes.push(notedata);
        }
console.log(this.trashnotes);
    },(error: any) => {
      console.log("Error", error);
    });
    
  })
}
}
