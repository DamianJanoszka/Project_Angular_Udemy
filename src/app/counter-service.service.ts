import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {
  activeInactive =0;
  inactiveActive =0;

  constructor() { }

  addActiveInactive(){
    this.activeInactive++;
    console.log(this.activeInactive);
  }
  addInactiveActive(){
    this.inactiveActive++;
    console.log(this.inactiveActive);
  }

}
