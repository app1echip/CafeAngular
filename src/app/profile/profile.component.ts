import { Component, OnInit } from '@angular/core';
import { User } from '@app/model/entity/user';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '@app/service/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  base_url = 'http://localhost:8080'
  profile: User
  constructor(private http: HttpClient, private account: AccountService) { }

  ngOnInit(): void {
    this.http.get<User>(this.base_url + '/api/profile').subscribe(data => this.profile = data);
  }

  update() {
    this.account.update(this.profile);
  }
}
