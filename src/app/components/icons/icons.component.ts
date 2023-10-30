import { DataserviceService } from './../../services/dataservice.service';
import { NotesserviceService } from './../../services/noteservice/notesservice.service';
import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
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
  isPinned: boolean = false;
  isReminded: boolean = false;
  isTrashed: boolean = false;
  isArchived: boolean = false;
   constructor(private noteservice:NotesserviceService,private dataservice:DataserviceService){}
  ngOnInit(): void {
    // console.log("notes has archive",this.noteobject);
   
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
  
      
  
         
    //   console.log("notes has archive",this.noteobject);
    // this.isArchived = !this.isArchived;
  // )}

//   addcolor(){

//   }
//   addimage(){

//   }
// archive(){

// }
// unarchieve(){

// }
// more(){

// }

}
