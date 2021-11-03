import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.services';


@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.innactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
