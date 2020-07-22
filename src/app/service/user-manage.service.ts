import { Injectable } from '@angular/core';
import { User } from '@app/model/entity/user';
import { UserRole } from '@app/model/entity/user-role';
import { HttpClient } from '@angular/common/http';
import { Constant } from '@app/config/constant';

@Injectable({
  providedIn: 'root'
})
export class UserManageService {
  private _buf_u: User[]
  private _buf_ur: UserRole[]

  constructor(
    private http: HttpClient,
    private url: Constant
  ) {
    this.fetchRole(); this.fetchUser();
  }
  fetchUser() { this.http.get<User[]>(this.url.user).subscribe(data => this._buf_u = data) }
  fetchRole() { this.http.get<UserRole[]>(this.url.userrole).subscribe(data => this._buf_ur = data) }
  requestUpdateUser(body: User) { this.http.post(this.url.user_update, body).subscribe(data => { }) }
  requestDeleteUser(body: User) { this.http.post(this.url.user_delete, body).subscribe(data => { }) }
  requestUpdateRole(role: UserRole) { this.http.post(this.url.userrole_update, role).subscribe(data => { }) }
  getUsers(): User[] { return this._buf_u }
  getUserRoles(): UserRole[] { return this._buf_ur }
}
