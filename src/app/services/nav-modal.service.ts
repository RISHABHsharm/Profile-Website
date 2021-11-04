import { Injectable, OnDestroy } from '@angular/core';
import { Router,NavigationStart, Event as NavigationEvent } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavModalService implements OnDestroy{

  showModal: boolean = false;
  currentRoute: string = "";
  event$ 
 
  constructor(private router: Router) {
    this.event$
      =this.router.events.subscribe((event: NavigationEvent) => {
          if(event instanceof NavigationStart) {
            this.currentRoute = event.url;
          }
        });
  }

  toggleModal(){
    this.showModal = !this.showModal;
  }
 
  ngOnDestroy() {
    this.event$.unsubscribe();
  }
}
