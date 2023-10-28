import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {
@Input() note :any;
  
  title: string ='';
 description: string='';
  isPinned: boolean = false;
  isReminded: boolean = false;
  isTrashed: boolean = false;
  isArchived: boolean = false;

   collab() {
    this.isPinned = !this.isPinned;
  }

  toggleRemind() {
    this.isReminded = !this.isReminded;
  }

  toggleTrash() {
    this.isTrashed = !this.isTrashed;
  }

  Archive() {
    this.isArchived = !this.isArchived;
  }
  addcolor(){

  }
  addimage(){

  }
archive(){

}
unarchieve(){

}
more(){

}
}
