import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'
import { UserInfo } from '../models/user-info';
import { Photo } from '../models/photo'

@Injectable()
export class UserService {
    
    private readonly usersUrl = 'https://jsonplaceholder.typicode.com/users';
    private readonly photosUrl = 'https://jsonplaceholder.typicode.com/photos';
    
    constructor(private http: HttpClient) {}

    public GetUserInfo(): Observable<UserInfo[]> {
        return this.http.get<UserInfo[]>(this.usersUrl)
        .pipe(map(data => { return data}));
    }

    public GetUserPhotos(id: number): Observable<Photo[]> {
        return this.http.get<Photo[]>(`${this.photosUrl}/?albumId=${id}`)
        .pipe(map(data => { return data}));
    }

    public GetPhoto(id: number, albumId: number): Observable<Photo> {
        return this.http.get<Photo>(`${this.photosUrl}/?albumId=${albumId}&id=${id}`)
        .pipe(map(data => { return data[0]}));
    }
}