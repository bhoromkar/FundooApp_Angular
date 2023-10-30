import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {



  private notesSource = new BehaviorSubject<string[]>([]);
  notes$ = this.notesSource.asObservable();

  constructor() { }
  addNote(note: string) {
    const currentNotes = this.notesSource.value;
    this.notesSource.next([...currentNotes, note]);
  }
  
}
