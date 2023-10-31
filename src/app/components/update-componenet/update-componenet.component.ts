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
  @Output() Displayupdatesnotes = new EventEmitter<any>;

  constructor(private noteservice:NotesserviceService,
    public dialogRef: MatDialogRef<UpdateComponenetComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,private snackbar:MatSnackBar,private formBuilder:FormBuilder) {
    this.noteTitle=data.noteTitle;
    this.noteDescription=data.noteDescription;
    this.noteId=data.noteId;
    
  }
  ngOnInit(): void {
    this.notesForm = this.formBuilder.group({
      noteTitle:this.noteTitle,
      noteDescription:this.noteDescription 
  });
  }
  updatenotes(){
  
  }
  
  
  Close(){
    let reqpayload={
      noteTitle:this.notesForm.get('noteTitle')?.value,
      noteDescription:this.notesForm.get('noteDescription')?.value,
    noteId: this.noteId
    }
    this.noteservice.updatenotes(reqpayload).subscribe(( response:any)=>{
      this.Displayupdatesnotes.emit(response);
    console.log(response);
    this.dialogRef.close(Response);
  });

  this.dialogRef.close();
  this.snackbar.open("Note Updated",'',{duration: 3000});
}

  }
  


