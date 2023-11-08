import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FundooNotes';
  mySubscription;

 constructor(private router: Router, private activatedRoute: ActivatedRoute){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
         // Trick the Router into believing it's last link wasn't previously loaded
         this.router.navigated = false;
      }
    }); 
 }
 ngOnDestroy(){
  if (this.mySubscription) {
    this.mySubscription.unsubscribe();
  }
}
}
