import { Component, EventEmitter, OnInit} from '@angular/core';
import { UsersServiceService } from '../users-service.service';
import { CounterServiceService } from '../counter-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersService: UsersServiceService, private counterService: CounterServiceService){
  }
  ngOnInit(){
  this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
  }
}
