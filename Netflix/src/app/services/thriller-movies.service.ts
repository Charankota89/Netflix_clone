import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ThrillerMovies } from '../models/thriller-movies';

@Injectable({
  providedIn: 'root'
})
export class ThrillerMoviesService {
  private baseurl = "assets/thrillermovies.json";
  constructor(private http:HttpClient) {}
  fetchingthrillermoviesdata():Observable<ThrillerMovies[]>{
    return this.http.get<ThrillerMovies[]>(this.baseurl);
  }
   
  }
