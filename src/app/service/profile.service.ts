import { Injectable } from '@angular/core';
import { User } from '@app/model/entity/user';
import { Constant } from '@app/config/constant';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private _buf: User
  constructor(
    private http: HttpClient,
    private url: Constant
  ) { this.fetch() }
  requestUpdate(body: User) { this.http.post(this.url.profile_update, body).subscribe(data => { }) }
  fetch() { this.http.get<User>(this.url.profile).subscribe(data => this._buf = data) }
  get(): User { return this._buf }
}
