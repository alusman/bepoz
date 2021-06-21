import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../models/user-info';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private users: UserInfo[];

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.GetUserInfo().subscribe(res => {
      if (res)
        this.users = res;
    });
  }

}
