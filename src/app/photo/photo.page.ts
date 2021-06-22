import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/models/photo';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-photo',
  templateUrl: 'photo.page.html',
  styleUrls: ['photo.page.scss'],
})
export class PhotoPage implements OnInit {
    private photo: Photo;
    private id: number;
    private albumId: number;

    constructor(private service: UserService,
        private _route: ActivatedRoute) {}
  
    ngOnInit(): void {
      this.id = +this._route.snapshot.paramMap.get('id');
      this.albumId = +this._route.snapshot.paramMap.get('albumId');
      
      this.service.GetPhoto(this.id, this.albumId).subscribe(res => {
        if (res)
          this.photo = res;
      });
    }
}