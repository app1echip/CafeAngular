import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@app/model/entity/user';
import { Token } from '@app/model/wrapper/token';
import { Constant } from '@app/config/constant';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  loggedin = false
  admin = false
  constructor(
    private http: HttpClient,
    private url: Constant
  ) {
    this.loggedin = this.pick() != null
    this.admin = this.loggedin && this.pick().role === 'ROLE_ADMIN'
  }

  login(user: User, succ: Function, fail: Function, signup: boolean = false) {
    var end = signup ? this.url.register : this.url.authenticate
    this.http.post<Token>(end, user).subscribe(
      data => {
        this.save(data);
        this.loggedin = true;
        this.admin = data.role === 'ROLE_AMDIN'
        succ(data);
      },
      error => {
        fail(error)
      }
    );
  }

  save(token: Token) { localStorage.setItem('token', JSON.stringify(token)) }
  pick(): Token { return JSON.parse(localStorage.getItem('token')) }
  prune() { localStorage.removeItem('token') }
  logout() {
    this.prune()
    this.admin = false
    this.loggedin = false
  }
}
