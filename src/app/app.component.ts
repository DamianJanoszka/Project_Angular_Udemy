import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-app';
  userName = 'default-User-Name';
  paragraphStatus = false;
  countClicksArray:number[] = [0];
  countClicks:number = 0;
  toggle(){
  this.paragraphStatus = !this.paragraphStatus
  this.countClicks++;
  this.countClicksArray.push(this.countClicks);
  }
}
