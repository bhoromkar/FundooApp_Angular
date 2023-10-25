import { Component } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {

  
  title: string ='';
 description: string='';
  isPinned: boolean = false;
  isReminded: boolean = false;
  isTrashed: boolean = false;
  isArchived: boolean = false;

  togglePin() {
    this.isPinned = !this.isPinned;
  }

  toggleRemind() {
    this.isReminded = !this.isReminded;
  }

  toggleTrash() {
    this.isTrashed = !this.isTrashed;
  }

  toggleArchive() {
    this.isArchived = !this.isArchived;
  }
}
