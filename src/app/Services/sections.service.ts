import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PLAYER } from '../bbb';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { BASE_URL } from '../global/global';


@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  constructor(
    private http: HttpClient
  ) { }

  public getSectionById(id:number){
    return this.http.get<PLAYER.section []>(`https://basketballbrivadois.up.railway.app/api/section/${id}`,{
    })
  }

  public getTeamBySection(section:number){
    return this.http.get<PLAYER.team>(`https://basketballbrivadois.up.railway.app/api/equipe/?section=${section}`,{
    })}

}
