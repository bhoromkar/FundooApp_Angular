import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output ,OnInit} from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';
import { NotesserviceService } from 'src/app/services/noteservice/notesservice.service';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { UpdateComponenetComponent } from '../update-componenet/update-componenet.component';

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
  resposne: any;
msg:any;
 

   
   
    constructor(private noteservice:NotesserviceService,private dialog: MatDialog) { 
      this.token = localStorage.getItem('token');
    }
   
  
    ngOnInit(): void {
    this.recievefromiconstodisplaycardicon(event)
    //this.recievefromunarchieve(event)
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
    
    
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponenetComponent, {
      width: '752px',
      height:'142px',
      
      data:note
      
      //height:'150px' // Adjust the width as needed
    });
    this.noteID=note.noteId;
    const index = this.notesArray.findIndex((note:any) => note.noteId === this.noteID);
    if (index !== -1) {
      this.notesArray.splice(index, 1); // Removes 1 element at the found index
     
      console.log(this.noteID);
      
    }
    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed respone from note componenet' );
      console.log(result ,"The dialog was closed respone from note componenet' ");
       this.notesArray.push(result);
       this.Displaynotes.emit(result);

    });
   
  }
  // opendialog(note:any) {
  //   let dialogRef = this.dialog.open(note,);
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.selectedOption = result;
  //   });
  // }
  recievefromiconstodisplaycardicon($event: any){
this.msg=$event;
this.Displaynotes.emit(this.msg);
  }

  
// recievefromiconstodisplaycardicon($event: any) {
//   console.log("note archieved", $event);
//   this.response=$event;
//   this.noteID=this.response;
//     const index = this.notesArray.findIndex((note:any) => note.noteId === this.noteID);
//     if (index !== -1) {
//       this.notesArray.splice(index, 1); // Removes 1 element at the found index
//     }
//   }
  recievefromunarchieve($event: any){
    console.log("note unarchieved", $event);
    this.response=$event;
    this.noteID=this.response;
    this.notesArray.push(this.response);
    alert("notes unarchieve " + this.response)
  }
 
  receiveMessagefromupdate($event: any){
    console.log("updatednotes", $event);
    this.resposne=$event.result;
    if(this.resposne!=null){
  this.notesArray.push(this.resposne);
  this.notesArray.update(this.resposne);
  this.notesArray.unshift(this.resposne);
     console.log(this.resposne);
    }
    
  }

  // console.log(this.response);
  
  // this.Displaynotes.emit($event)



}