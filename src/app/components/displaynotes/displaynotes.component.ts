import { FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';
import { NotesserviceService } from 'src/app/services/noteservice/notesservice.service';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-displaynotes',
  templateUrl:'./displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent {
  selectedOption: string | undefined;
  hover: boolean = false;
  token:any;
 // notesarray :any=[];  
    note!: any[];
  @Input() notesArray: any;
  @Input()messageOFCHILD!: string;
  @Input() singlenote :any;
 

   
   
    constructor(private noteservice:NotesserviceService,private dialog: MatDialog) { 
      this.token = localStorage.getItem('token');
    }
   
  
    ngOnInit(): void {
    
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
    const dialogRef = this.dialog.open(this.notesArray, {
      width: '350px',
      height:'150px' // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  opendialog() {
    let dialogRef = this.dialog.open(this.notesArray,);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }
}


// @Component({
//   selector: 'dialog-result-example-dialog',
//   templateUrl: './dialog-result-example-dialog.html',
// })
// export class DialogResultExampleDialog {
//   constructor(private dialogRef: MdDialogRef<DisplaynotesComponent>) {}
// }


