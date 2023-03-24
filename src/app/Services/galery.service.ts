import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../global/global';
import { PICTURES } from '../bbb';

@Injectable({
  providedIn: 'root'
})
export class GaleryService {

  constructor(
    private http: HttpClient
  ) { }

  public getAlbum(){
    return this.http.get<PICTURES.Album[]>(`https://basketballbrivadois.up.railway.app/api/album`,{
    })
  }
  public getPicturesByAlbum(album: number){
    return this.http.get<PICTURES.Photo[]>(`https://basketballbrivadois.up.railway.app/api/album/${album}`,{
    })
  }
}
