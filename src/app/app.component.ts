import { Component } from '@angular/core'
import { AccountService } from '@app/service/account.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(
    private account: AccountService,
    private router: Router
  ) { }
  loggedin() {
    return this.account.loggedin
  }
  admin() {
    return this.account.admin
  }
  logout() {
    this.account.logout()
    this.router.navigateByUrl('/menu')
  }
}
