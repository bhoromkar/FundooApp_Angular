import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(notesArray: any, searchText?: any): any {
    console.log(searchText , "from pipes");
    
    if(!searchText){
      return notesArray;
    }else{
      searchText=searchText?.toLowerCase();
    }
  
    return notesArray.filter((note: any) => {
      const title = note.noteTitle?.toLowerCase() || ''; 
     
      const description = note.noteDescription?.toLowerCase() || ''; // Use an empty string as a default value
      console.log(searchText,"from search");
      return title.includes(searchText) || description.includes(searchText);
    });
    //filter service with array
  }

}
