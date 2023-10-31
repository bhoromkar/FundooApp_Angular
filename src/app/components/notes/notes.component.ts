import { DataserviceService } from './../../services/dataservice.service';
import { NotesserviceService } from './../../services/noteservice/notesservice.service';
import { Component, Input, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { EventEmitter,  Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
//import {  } from '../../services/noteService/note.service';
import {Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule,FormBuilder, FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { IconsComponent } from '../icons/icons.component';
import { Observable } from 'rxjs';

// export interface DialogData {
//   title: string;
//   description: string;
// }

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  notesForm!:FormGroup;
  rePayload:any;
  noteDescription: any;
  noteTitle: any;
  color: any;
  token:any;
  isShow = false;
 
  @Input() note: any;
  @Output() Displaynotes = new EventEmitter<any>;
  constructor(private FormBuilder:FormBuilder, private _snackbar:MatSnackBar,private noteservice:NotesserviceService,private dataservice:DataserviceService){
  this.token = localStorage.getItem('token');}

  ngOnInit() :void{

    const myObservable = new Observable<ArrayBuffer>((observer) => {
     
    });
    
    this.notesForm = this.FormBuilder.group({
      noteTitle:this.noteTitle,
      noteDescription:this.noteDescription 
  });
  }

  Show() {
    this.isShow = true;
    
  }
  Close() {
    
    this.isShow = false;
// console.log("notes",this.notesForm.value)
    let rePayload={
      "noteTitle":this.notesForm.get('noteTitle')?.value,
      "noteDescription":this.notesForm.get('noteDescription')?.value,
      "color":this.notesForm.get('color')?.value,
    
    }
    this.noteservice.createnote(rePayload).subscribe((response:any)=>{
      console.log(response)
      console.log(response.result);
      
      this.Displaynotes.emit(response);
     }, (error: any) => {
      console.log("Error", error);
     });
   

     this.noteTitle = '';
     this.noteDescription = '';


      // this._snackbar.open('Note Created successfully', '', {
      //   duration: 3000,
      //   verticalPosition: 'bottom'
      // })

    }
  }

  
//   openSnackbar(message: any, action: any) {
//     this.snackbar.open(message, action)
//   }
// }

