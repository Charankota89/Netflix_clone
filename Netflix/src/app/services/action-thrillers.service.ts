import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ActionThrillers } from '../models/action-thrillers';

@Injectable({
  providedIn: 'root'
})
export class ActionThrillersService {
  private baseurl = "assets/action-thrillers.json";

  constructor(private http:HttpClient) { }
  fetchingactionthrillersdata():Observable<ActionThrillers[]>{
    return this.http.get<ActionThrillers[]>(this.baseurl);
  }
}
