import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  baseUrl='https://ag.bet36.live/api-V2/';

  post(url:string,data={}){
    return this.http.post(`${this.baseUrl}${url}`,data)
  }
  
}
