import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/entity/user';
import { Token } from 'src/app/model/wrapper/token';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  base_url = 'http://localhost:8080'

  constructor(private http: HttpClient) { }
  login(username: string, password: string): boolean {
    let ok = true
    this.http.post<Token>(this.base_url + '/pub/authenticate', { username, password }).subscribe(data => this.store(data), error => { ok = false })
    return ok
  }

  signup(username: string, password: string, email: string, phone: string): boolean {
    let ok = true
    this.http.post<Token>(this.base_url + '/pub/register', { username, password, email, phone }).subscribe(data => this.store(data), error => ok = false)
    return ok
  }
  store(token: Token) {
    localStorage.setItem('token', JSON.stringify(token));
  }
  logout() {
    localStorage.removeItem('token');
  }
  online() {
    return Date.now() < JSON.parse(localStorage.getItem('token')).expire
  }
  update(user: User) {
    let ok = true
    this.http.post(this.base_url + '/api/profile/update', user).subscribe(data => console.log(data))
    return ok
  }
}
