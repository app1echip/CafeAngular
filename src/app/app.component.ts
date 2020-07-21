import { Component } from '@angular/core';
import { AccountService } from 'src/app/service/account.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private account: AccountService) { }
  logout() { this.account.logout() }
}
