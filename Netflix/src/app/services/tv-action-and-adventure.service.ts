import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TvActionAndAdventure } from '../models/tv-action-and-adventure';

@Injectable({
  providedIn: 'root'
})
export class TvActionAndAdventureService {
private baseurl = "assets/tv-action-and-adventure.json";
  constructor(private http:HttpClient) {}
  fetchingtvactionandadventuredata():Observable<TvActionAndAdventure[]>{
    return this.http.get<TvActionAndAdventure[]>(this.baseurl);
  }
}
