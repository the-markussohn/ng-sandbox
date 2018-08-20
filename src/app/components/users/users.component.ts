import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../models/User';
import {DataService} from '../../services/data.service';

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

  constructor(private _dataService: DataService) {
  }

  ngOnInit() {
    this._dataService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });
  }

  onSubmit({value, valid}: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('Not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this._dataService.addUser(value);
      this.form.reset();
    }
  }
}
