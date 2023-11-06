import { DataserviceService } from './../../services/dataservice.service';
import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NgIf, NgFor} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy{
value: any;
subscription: any;
message:any;

  
    mobileQuery: MediaQueryList;
  
    fillerNav = Array.from({length: 5}, (_, i) => `Nav Item ${i + 1}`);
  
    
    toggleRemind(){

  }
  
    private _mobileQueryListener: () => void;
  
    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private data:DataserviceService) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
    }
  ngOnInit(): void {
    this.subscription= this.data.searchNote.subscribe(message => this.message = message)

  }
  
    ngOnDestroy(): void {
      this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    searchTitle(event: any){
      console.log("input in search field===",event.target.value)
      this.value = event.target.value;
      let Ddata={
        type: 'search',
        data:[this.value]

      }
      this.data.changeData(Ddata)
      console.log(Ddata);
      
      }
 
  }
  
  
 

