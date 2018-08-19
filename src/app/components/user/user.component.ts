import {Component} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {

  user: User;

  constructor() {
    this.user = {
      firstName: 'John',
      lastName: 'Smith',
      age: 30,
      address: {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA'
      }
    };
  }

}
