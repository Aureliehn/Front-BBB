import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../global/global';
import { CLUB } from '../bbb';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(
    private http: HttpClient
    ) { }

  public getTeamMembers(){
    return this.http.get< CLUB.Pole []>(`https://basketballbrivadois.up.railway.app/api/profil`,{
    })
  }
  public getLicence(){
    return this.http.get<CLUB.Licence []>(`https://basketballbrivadois.up.railway.app/api/licence`)
  }

}
