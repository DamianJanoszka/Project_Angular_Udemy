import { Component, OnInit,DoCheck, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  @Output() incrementingValueAction = new EventEmitter<number>();
  initialValue = 0;
  interval;

  constructor() { }

  ngOnInit(): void {
  }
  startGame(){
  this.interval = setInterval(()=>{
  this.incrementingValueAction.emit(this.initialValue++);
  },1000);
  }

  pauseGame(){
  clearInterval(this.interval);
  }
}
