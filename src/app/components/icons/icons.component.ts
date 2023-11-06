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
    { code: '#FEFFFE', name: 'white' },
    { code: '#FAAFA8', name: 'red' },
    { code: '#F29F77', name: 'orange' },
    { code: '#FEF9B8', name: 'yellow' },
    { code: '#E2F6D3', name: 'green' },
    { code: '#B4DDD3', name: 'teal' },
    { code: '#D5E4EC', name: 'blue' },
    { code: '#AFCCDD', name: 'darkblue' },
    { code: '#D3BEDA', name: 'purple' },
    { code: '#F6E3DC', name: 'brown' },
    { code: '#EFEEF0', name: 'grey' },

  ];

  ngOnInit(): void {
    // console.log("notes has archive",this.noteobject);
   
  }
   
  setcolors(color:any){
return{
  'background':color
}
  }
  setColor(BACKGROUNDcolor:any,name:any){
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
      this.displayicon.emit(this.data)
    })
   
    this.snackbar.open(" color changed to ",name,{duration: 3000});
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
  
      
  isMouseOver = false;

  onMouseEnter() {
    this.isMouseOver = true;
  }

  onMouseLeave() {
    this.isMouseOver = false;
  }
    
getstyle() {
  backgroundColor: this.colors;
}

colorpallate(){
  this.getstyle();
}

}
