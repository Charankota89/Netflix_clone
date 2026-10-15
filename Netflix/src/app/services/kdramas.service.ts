import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kdramas } from '../models/kdramas';

@Injectable({
  providedIn: 'root'
})
export class KdramasService {
  private baseurl = "assets/kdramas.json";

  constructor(private http: HttpClient) { }
  fetchingkdramasdata(): Observable<Kdramas[]> {
    return this.http.get<Kdramas[]>(this.baseurl);
  }
}
