import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output ,OnInit} from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';
import { NotesserviceService } from 'src/app/services/noteservice/notesservice.service';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-displaynotes',
  templateUrl:'./displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  selectedOption: string | undefined;
  hover: boolean = false;
  token:any;
 // notesarray :any=[];  
    //note!: any[];
    note:any;
    response:any;
    noteID:any;
  @Input() notesArray: any;
  @Output() Displaynotes= new EventEmitter<any>;

 

   
   
    constructor(private noteservice:NotesserviceService,private dialog: MatDialog) { 
      this.token = localStorage.getItem('token');
    }
   
  
    ngOnInit(): void {
    this.recievefromiconstodisplaycard(event)
    }
  

  toggleHover() {
    this.hover = !this.hover;
  }
    isMouseOver = false;

    onMouseEnter() {
      this.isMouseOver = true;
    }
  
    onMouseLeave() {
      this.isMouseOver = false;
    }
    
    
  // openDialog(note:any): void {
  //   const dialogRef = this.dialog.open(this.note, {
  //     width: '350px',
  //     data:note
  //     //height:'150px' // Adjust the width as needed
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }
  // opendialog(note:any) {
  //   let dialogRef = this.dialog.open(note,);
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.selectedOption = result;
  //   });
  // }
  

  
recievefromiconstodisplaycard($event: any) {
  console.log("note archieved", $event);
  this.response=$event;
  this.noteID=this.response;
    const index = this.notesArray.findIndex((note:any) => note.noteId === this.noteID);
    if (index !== -1) {
      this.notesArray.splice(index, 1); // Removes 1 element at the found index
    }
  }
  recievefromunarchieve($event: any){
    console.log("note unarchieved", $event);
    this.response=$event;
    this.noteID=this.response;
    this.notesArray.push(this.response);
    alert("notes unarchieve " + this.response)
  }
  

  // console.log(this.response);
  
  // this.Displaynotes.emit($event)
}

