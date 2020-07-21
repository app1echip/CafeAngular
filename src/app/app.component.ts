import { Component } from '@angular/core'
import { AccountService } from '@app/service/account.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private account: AccountService,
    private router: Router) { }
  logout() { 
    this.router.navigateByUrl('')
    this.account.prune()
  }
}
