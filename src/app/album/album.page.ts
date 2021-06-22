import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from 'src/app/models/photo';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-album',
  templateUrl: 'album.page.html',
  styleUrls: ['album.page.scss'],
})
export class AlbumPage implements OnInit {
    private photos: Photo[];
    private id: number;

    constructor(private service: UserService,
        private _router: Router,
        private _route: ActivatedRoute) {}
  
    ngOnInit(): void {
      this.id = +this._route.snapshot.paramMap.get('id');
      this.service.GetUserPhotos(this.id).subscribe(res => {
        if (res)
          this.photos = res;
      });
    }
  
    onClick(id, albumId){
      this._router.navigate([`/photo/${id}/${albumId}`]);
    }
}