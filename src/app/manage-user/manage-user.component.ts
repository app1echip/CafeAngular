import { Component, OnInit } from '@angular/core';
import { User } from '@app/model/entity/user';
import { UserRole } from '@app/model/entity/user-role';
import { UserManageService } from "@app/service/user-manage.service";
@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  users: Array<User>
  user_roles: Array<UserRole>
  constructor(
    private service: UserManageService
  ) { }

  ngOnInit(): void {
    this.service.users.subscribe(
      (data) => this.users = data
    )
    this.service.roles.subscribe(
      (data) => this.user_roles = data
    )
  }
  updateUser(user: User) {
    this.service.updateUser(user)
  }
  updateRole(role: UserRole) {
    this.service.updateRole(role)
  }
  deleteUser(user: User) {
    this.service.deleteUser(user)
  }
}
