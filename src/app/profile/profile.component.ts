import { Component, OnInit } from '@angular/core';
import { User } from '@app/model/entity/user';
import { ProfileService } from '@app/service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: User
  constructor(private service: ProfileService) { }
  ngOnInit(): void { }
  ngDoCheck() {
    this.profile = this.service.get()
  }
  update() { this.service.requestUpdate(this.profile) }
}
