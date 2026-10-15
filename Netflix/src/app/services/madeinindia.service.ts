import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Madeinindia } from '../models/madeinindia';

@Injectable({
  providedIn: 'root'
})
export class MadeinindiaService {
    private baseurl = "assets/madeinindia.json";
  
    constructor(private http: HttpClient) { }
    fetchingmadeinindiadata(): Observable<Madeinindia[]> {
      return this.http.get<Madeinindia[]>(this.baseurl);

   }
}
