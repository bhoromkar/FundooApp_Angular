import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesserviceService } from 'src/app/services/noteservice/notesservice.service';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {
  //notesArray:any;
  response:any;
  pinArray:any=[];
  token:any;
  msg:any;
  @Input() notesArray: any[] = [];
  @Output() Displaynotes= new EventEmitter<any>;
  @Input() sharedData: any=[];
  constructor(private noteservice:NotesserviceService){
    this.token=localStorage.getItem('token')}
    ngOnInit(): void {
     // this.recievefromiconstodisplaycardiconchangecolor(event);

      this.getallnotes();
    }
    getallnotes(){ 
      console.log(this.notesArray, "this is the array") ;
     console.log(this.sharedData, "this is the  share array") ;
      if (this.notesArray) { 
        console.log(this.notesArray, "this is the array") ;
     
     
        
        
      this.notesArray =  this.notesArray.filter((notedata:any)=>{
          if(notedata.isPin!==false){
            this.pinArray.push(notedata);
          }
       console.log(this.pinArray);
  
      
    })
  }
}
  recievefromiconstodisplaycardiconchangecolor($event: any){
    this.msg=$event;
    this.Displaynotes.emit(this.msg);
      }
}
