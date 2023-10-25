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

// export interface DialogData {
//   title: string;
//   description: string;
// }

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notesForm!:FormGroup;
  rePayload:any;
  title: any;
  description: any;
  color: any;
  token:any;
  isShow = false;
 
  @Input() noteCard: any;
  
  constructor(private FormBuilder:FormBuilder, private _snackbar:MatSnackBar,private noteservice:NotesserviceService){
  this.token = localStorage.getItem('token');}

  ngOnInit() :void{
    // this.data = {
    //   title: this.title,
    //   description: this.description,
    //   color: this.color
    // }
    this.notesForm = this.FormBuilder.group({
    title:this.title,
    description:this.description 
  });
  }

  Show() {
    this.isShow = true;
    
  }
  Close() {

    this.isShow = false;
// console.log("notes",this.notesForm.value)
    let rePayload={
      "title":this.notesForm.get('title')?.value,
      "description":this.notesForm.get('description')?.value,
      "color":this.notesForm.get('color')?.value,
    
    }
    this.noteservice.createnote(rePayload).subscribe((response:any)=>{
      console.log(response)
     }, (error: any) => {
      console.log("Error", error);
     });
    console.log("rwPayload",rePayload);

    
      this._snackbar.open('Note Created successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })

    }
  }

  
//   openSnackbar(message: any, action: any) {
//     this.snackbar.open(message, action)
//   }
// }

