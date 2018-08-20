import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../models/User';

@Injectable()
export class DataService {

  users: User[];

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Smith',
        email: 'kevin.smith@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin.johnson@gmail.com',
        isActive: false,
        registered: new Date('05/11/2015 05:30:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Brooks',
        email: 'karen.brooks@gmail.com',
        isActive: true,
        registered: new Date('08/02/2015 08:30:00'),
        hide: true
      }
    ];
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
