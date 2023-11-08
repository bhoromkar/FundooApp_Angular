import { FormBuilder, FormGroup } from '@angular/forms';
import { NotesserviceService } from './../../services/noteservice/notesservice.service';
import { NotesComponent } from './../notes/notes.component';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-componenet',
  templateUrl: './update-componenet.component.html',
  styleUrls: ['./update-componenet.component.scss']
})
export class UpdateComponenetComponent implements OnInit{
  notesForm!:FormGroup;
  noteTitle:any;
  noteDescription:any;
  note:any;
  noteId:any;
  noteTitle1:any;
  color:any;
  notedescription1:any;
 
  @Output() Displaynotes = new EventEmitter<any>;

  constructor(private noteservice:NotesserviceService,
    public dialogRef: MatDialogRef<UpdateComponenetComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,private snackbar:MatSnackBar,private formBuilder:FormBuilder) {
    this.noteTitle=data.noteTitle;
    this.noteDescription=data.noteDescription;
    this.noteId=data.noteId;
    this.color=data.color;
    
  }
  ngOnInit(): void {
    this.notesForm = this.formBuilder.group({
      noteTitle:this.noteTitle,
      noteDescription:this.noteDescription,
      color:this.color,
  });
  }
  
  updateNoteTitle(event: any) {
    this.noteTitle = event.target.textContent;
  }
  
  updateNotedescription(event: any) {
    this.noteDescription = event.target.textContent;
  }
  
  Close(){
    let reqpayload={
      noteTitle:this.noteTitle,
      
      
      noteDescription:this.noteDescription,
    noteId: this.noteId,
    color:this.color, 
    
    }
    
    this.noteservice.updatenotes(reqpayload).subscribe(( response:any)=>{
     
    console.log(response);
    this.dialogRef.close(response.result);
   // this.Displaynotes.emit(response);
  });

  this.dialogRef.close();
  this.snackbar.open("Note Updated",'',{duration: 3000});
}
}
  


