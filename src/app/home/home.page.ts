import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfo } from '../models/user-info';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private users: UserInfo[];

  constructor(private service: UserService,
    private _router: Router) {}

  ngOnInit(): void {
    this.service.GetUserInfo().subscribe(res => {
      if (res)
        this.users = res;
    });
  }

  onClick(id){
    this._router.navigate([`/album/${id}`]);
  }
}
