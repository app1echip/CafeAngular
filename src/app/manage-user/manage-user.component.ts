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
  users: User[]
  user_roles: UserRole[]
  constructor(
    private service: UserManageService
  ) { }
  user_display: string[] = ['username', 'password', 'email', 'phone', 'id']
  userrole_display = ['role', 'user']
  ngOnInit(): void { }
  ngDoCheck() {
    this.users = this.service.getUsers()
    this.user_roles = this.service.getUserRoles()
  }
  updateUser(user: User) { this.service.requestUpdateUser(user) }
  updateRole(role: UserRole) { this.service.requestUpdateRole(role) }
  deleteUser(user: User) { this.service.requestDeleteUser(user) }
}
