import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Yournextwatch } from '../models/yournextwatch';

@Injectable({
  providedIn: 'root'
})
export class YournextwatchService {
    private baseurl = "assets/yournextwatch.json";
  
    constructor(private http: HttpClient) { }
    fetchingyournextwatchdata(): Observable<Yournextwatch[]> {
      return this.http.get<Yournextwatch[]>(this.baseurl);

   }
}
