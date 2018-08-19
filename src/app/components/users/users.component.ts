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
  enableAdd = false;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
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
          image: 'https://picsum.photos/300/300/?image=44'
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
          image: 'http://picsum.photos/300/300/?image=33'
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
          image: 'http://picsum.photos/300/300/?image=3'
        }
      ];

      this.loaded = true;

      this.addUser({
        firstName: 'David',
        lastName: 'Lynch'
      });
    }, 2000);
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
