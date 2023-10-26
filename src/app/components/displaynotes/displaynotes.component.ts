import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';
import { NotesserviceService } from 'src/app/services/noteservice/notesservice.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-displaynotes',
  templateUrl:'./displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent {
 
  hover: boolean = false;
  token:any;
  notesarray :any=[];
  //notes: any =[];

   
   
    constructor(private noteservice:NotesserviceService,private dialog: MatDialog) { 
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
    
  openDialog(): void {
    const dialogRef = this.dialog.open(DisplaynotesComponent, {
      width: '350px',
      height:'150px' // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
