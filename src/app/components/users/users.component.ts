import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended = true;
  loaded: boolean;
  enableAdd = true;

  constructor() {
  }

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Smith',
        age: 30,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA'
        },
        isActive: true,
        registered: new Date('01/02/2018 08:30:00')
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 36,
        address: {
          street: '20 School st',
          city: 'Lynn',
          state: 'MA'
        },
        isActive: false,
        registered: new Date('05/11/2015 05:30:00')
      },
      {
        firstName: 'Karen',
        lastName: 'Brooks',
        age: 29,
        address: {
          street: '55 Mill st',
          city: 'Miami',
          state: 'FL'
        },
        isActive: true,
        registered: new Date('08/02/2015 08:30:00')
      }
    ];

    this.loaded = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
