import { MatSnackBar } from '@angular/material/snack-bar';
import { DataserviceService } from './../../services/dataservice.service';
import { NotesserviceService } from './../../services/noteservice/notesservice.service';
import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog';
import {MatMenuTrigger, MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  
@Input() noteobject :any;
@Output() displayicon= new EventEmitter<any>();
@Output() uarchieve= new EventEmitter<any>();
  data:any;
  noteId:any;
  title: string ='';
 description: string='';
 bacolr:any;
  isPinned: boolean = false;
  isReminded: boolean = false;
  isTrashed: boolean = false;
  isArchived: boolean = false;
   constructor(private noteservice:NotesserviceService,private dataservice:DataserviceService,public dialog: MatDialog,private snackbar:MatSnackBar){}
   colors: Array<any> = [
    { code: '#fff', name: 'white' },
    { code: '#f28b82', name: 'red' },
    { code: '#fbbc04', name: 'orange' },
    { code: '#ffff00', name: 'yellow' },
    { code: '#ccff90', name: 'green' },
    { code: '#a7ffeb', name: 'teal' },
    { code: '#cbf0f8', name: 'blue' },
    { code: '#aecbfa', name: 'darkblue' },
    { code: '#d7aefb', name: 'purple' },
    { code: '#e6c9a8', name: 'brown' },
    { code: '#e8eaed', name: 'grey' },

  ];

  ngOnInit(): void {
    // console.log("notes has archive",this.noteobject);
   
  }
  setcolors(color:any){
return{
  'background':color
}
  }
  setColor(BACKGROUNDcolor:any){
    console.log('console',BACKGROUNDcolor);
    console.log(this.noteobject);

    //this.noteobject.color=color;
    let data={
      newColor:BACKGROUNDcolor,
      noteId: this.noteobject.noteId,
    }
    console.log(data);
    this.noteservice.changeColor(data).subscribe((response:any)=>{
      console.log(response);
      this.displayicon.emit(response)
    })
   
    this.snackbar.open(BACKGROUNDcolor+" color changed",'',{duration: 3000});
  }
  Archive() {
    if(this.noteobject.isArchive==false && this.noteobject.isTrash==false){
        //this.isArchived = !this.isArchived;
        this.data=this.noteobject.noteId;
      console.warn("Note(" ,this.noteobject.noteId);
      let rePayload={
        noteId:this.data,
      }
  this.noteservice.ArchieveNotes(rePayload).subscribe((response:any) =>
  {console.log('Response Data', response)
  
  this.displayicon.emit(this.data);
  alert("The noteId is " + this.data);  
});
    }
  }
  unArchive() {
    if(this.noteobject.isArchive==true && this.noteobject.isTrash==false){
        //this.isArchived = !this.isArchived;
        this.data=this.noteobject.noteId;
      console.warn("Note(" ,this.noteobject.noteId);
      let rePayload={
        noteId:this.data,
      }
  this.noteservice.UnarchieveNotes(rePayload).subscribe((response:any) =>
  {console.log('Response Data', response)
  
  this.uarchieve.emit(this.noteobject);
  alert("The noteId is " + this.noteobject);  
});
    }
  }
  Trash() {
    if(this.noteobject.isArchive==false && this.noteobject.isTrash==false){
        //this.isArchived = !this.isArchived;
        this.data=this.noteobject.noteId;
      console.warn("Note(" ,this.noteobject.noteId);
      let rePayload={
        noteId:this.data,
      }
  this.noteservice.TrashNotes(rePayload).subscribe((response:any) =>
  { 
    console.log('Response Data', response)
    this.displayicon.emit(response)

});
    }
  }
  // }
  
      
  
    
getstyle() {
  backgroundColor: this.colors;
}

colorpallate(){
  this.getstyle();
}

}
