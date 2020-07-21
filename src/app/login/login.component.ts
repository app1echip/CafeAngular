import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'src/app/service/account.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  constructor(private builder: FormBuilder,
    private account: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  login() {
    const v = this.form.value
    let suc: boolean = false
    if (v.username && v.password) {
      suc = this.account.login(v.username, v.password)
    }
    if (suc) {
      this.router.navigateByUrl('/history')
    }
  }
}
