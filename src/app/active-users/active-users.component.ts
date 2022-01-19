import { Component, EventEmitter, OnInit} from '@angular/core';
import { UsersServiceService } from '../users-service.service';
import { CounterServiceService } from '../counter-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users: string[];

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }

  constructor(private usersService: UsersServiceService, private counterService: CounterServiceService){
  }

  ngOnInit(){
  this.users = this.usersService.activeUsers
  }
}
