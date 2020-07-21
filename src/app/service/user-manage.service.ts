import { Injectable } from '@angular/core';
import { User } from '@app/model/entity/user';
import { Subject } from 'rxjs';
import { UserRole } from '@app/model/entity/user-role';
import { HttpClient } from '@angular/common/http';
import { Constant } from '@app/config/constant';

@Injectable({
  providedIn: 'root'
})
export class UserManageService {
  private _subUser = new Subject<Array<User>>();
  private _subRole = new Subject<Array<UserRole>>();
  private _users: Array<User>;
  private _roles: Array<UserRole>;
  public users = this._subUser.asObservable();
  public roles = this._subRole.asObservable();

  constructor(
    private http: HttpClient,
    private url: Constant
  ) { this.getRole(); this.getUser(); }

  getUser() {
    this.http.get<Array<User>>(this.url.user()).subscribe(
      data => {
        this._subUser.next(data);
        this._users = data;
      }
    )
  }

  getRole() {
    this.http.get<Array<UserRole>>(this.url.user_role()).subscribe(
      data => {
        this._subRole.next(data);
        this._roles = data;
      }
    )
  }

  updateUser(user: User) {
    this.http.post(this.url.update(this.url.user), user).subscribe(
      data => { }
    )
  }

  updateRole(role: UserRole) {
    this.http.post(this.url.update(this.url.user_role), role).subscribe(
      data => { }
    )
  }

  deleteUser(user: User) {
    this.http.post(this.url.delete(this.url.user), user).subscribe(
      data => { }
    )
  }
}
