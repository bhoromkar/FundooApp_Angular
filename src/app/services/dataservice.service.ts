import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  notesArray: any[] = [];


  // private notesSource = new BehaviorSubject<string[]>([]);
  // notesArray$ = this.notesSource.asObservable();

  // constructor() { }
  // addNote(note: string) {
  //   const currentNotes = this.notesSource.value;
  //   this.notesSource.next([...currentNotes, note]);

  // } private noteArraySubject: BehaviorSubject<any[]> = new BehaviorSubject(this.noteArray);
  private noteArraySubject: BehaviorSubject<any[]> = new BehaviorSubject(this.notesArray);

  getNoteArray(): Observable<any[]> {
    return this.noteArraySubject.asObservable();
  }

  // Add a method to update the noteArray
  // updateNoteArray(newNoteArray: any[]): void {
  //   this.notesArray = newNoteArray;
  //   this.noteArraySubject.next(this.notesArray);
  // }

  
  private searchData = new BehaviorSubject({notesArray:[]});
  searchNote = this.searchData.asObservable();


 //data which is change or recent data assign to search note
  changeData(message:any){
    this.searchData.next(message)
    console.log(message,"from data service");
    
  
}
}
