import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'src/app/service/account.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  constructor(
    private builder: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: [''],
      phone: ['']
    })
  }
  register() {
    const v = this.form.value
    let suc = false
    if (v.username && v.password) {
      suc = this.accountService.signup(v.username, v.password, v.email, v.phone)
    }
    if (suc) {
      this.router.navigateByUrl('')
    }
  }
}
