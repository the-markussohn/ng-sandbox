import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  loaded: boolean;
  showUserForm = false;
  @ViewChild('userForm') form: any;

  constructor() {
  }

  ngOnInit() {
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

    this.loaded = true;
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if (!valid) {
      console.log('Not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.users.unshift(value);
      this.form.reset();
    }
  }
}
