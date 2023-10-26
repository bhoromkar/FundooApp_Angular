import { Component } from '@angular/core';
import { NotesserviceService } from 'src/app/services/noteservice/notesservice.service';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})

export class GetallnotesComponent {
 get!: FormGroup;
  token:any;
  notesarray :any=[];
  notes: any =[];
 
  constructor(private noteservice:NotesserviceService) { 
    this.token = localStorage.getItem('token');
  }
 

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes(){
    this.noteservice.getallnotes().subscribe((request:any)=> {
      console.log("request data", request);
      console.log("request data", request.result);
   
      this.notesarray = request.result;
    })
     // console.log(this.notesArray);
      this.notesarray.reverse();
      // this.notesArray = this.notesArray.filter((notedata:any)=>{
      //   return notedata.trash === false && notedata.archive ===false;
    
    //})
  }
}
