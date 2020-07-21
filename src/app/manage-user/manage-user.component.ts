import { Component, OnInit } from '@angular/core';
import { User } from '../model/entity/user';
import { UserRole } from '../model/entity/user-role';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  base_url = 'http://localhost:8080'
  users: Array<User>
  user_roles: Array<UserRole>
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Array<User>>(this.base_url + '/admin/user').subscribe(data => this.users = data)
    this.http.get<Array<UserRole>>(this.base_url + '/admin/user_role').subscribe(data => this.user_roles = data)
  }
  update_user(user: User) {
    this.http.post(this.base_url + '/admin/user/update', user).subscribe(data => console.log(data))
  }
  change_role(ur: UserRole) {
    this.http.post(this.base_url + '/admin/user_role/update', ur).subscribe(data => console.log(data))
  }
  delete_user(user: User) {
    this.http.post(this.base_url + '/admin/user/delete', user).subscribe(data => console.log(data))
  }
}
