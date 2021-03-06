import { Component, OnInit } from '@angular/core';
import { AccountService } from '@app/service/account.service';
import { Router } from '@angular/router';
import { User } from '@app/model/entity/user';
import { Token } from '@app/model/wrapper/token';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User

  constructor(
    private account: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  login() {
    let succ = (data: Token) => {
      this.router.navigateByUrl('/menu')
    }
    let fail = (error: HttpErrorResponse) => {
      // do something
    }
    this.account.login(this.user, succ, fail)
  }
}
