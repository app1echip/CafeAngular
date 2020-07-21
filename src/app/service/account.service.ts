import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@app/model/entity/user';
import { Token } from '@app/model/wrapper/token';
import { Constant } from '@app/config/constant';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  loggedin = (): boolean => this.pick() != null
  admin = (): boolean => this.loggedin() && this.pick().role === 'ROLE_ADMIN'
  expire = (): boolean => this.loggedin() && this.pick().expire.getTime() > Date.now()
  constructor(
    private http: HttpClient,
    private url: Constant
  ) { }

  login(user: User, succ: Function, fail: Function, signup: boolean = false) {
    var end = signup ? this.url.register() : this.url.authenticate()
    this.http.post<Token>(end, user).subscribe(
      data => {
        this.save(data);
        succ(data);
      },
      error => {
        fail(error)
      }
    );
  }

  save(token: Token) {
    localStorage.setItem('token', JSON.stringify(token))
  }

  pick(): Token {
    return JSON.parse(localStorage.getItem('token'))
  }
  prune() {
    localStorage.removeItem('token')
  }

  update(user: User) {
    let ok = true
    this.http.post(this.url.update(this.url.profile), user).subscribe(data => console.log(data))
    return ok
  }
}
