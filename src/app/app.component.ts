import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-app';

  odd: number[] = [];
  even: number[] =[];

  onStartGame(firedNumber: number){
  console.log(firedNumber);
    if(firedNumber % 2 ===0){
      this.even.push(firedNumber);
    } else {
    this.odd.push(firedNumber);}
  }
}
