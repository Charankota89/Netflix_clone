import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RelentlessCrimeDramas } from '../models/relentless-crime-dramas';

@Injectable({
  providedIn: 'root'
})
export class RelentlessCrimeDramasService {
private baseurl = "src\\assets\\relentlesscrimedrama.json";
  constructor(private http:HttpClient) {}
  fetchingrelentlesscrimedramasdata():Observable<RelentlessCrimeDramas[]>{
    return this.http.get<RelentlessCrimeDramas[]>(this.baseurl);
  }
}
