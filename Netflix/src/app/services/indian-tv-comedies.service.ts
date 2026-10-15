import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndianTvComediesService {
  private baseurl = "https://localhost:8080/api/v1/I";

  constructor(private http:HttpClient) { }
  onSubmit(){
    
  }
}
