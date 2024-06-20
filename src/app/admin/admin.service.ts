import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = "http://10.10.10.114/web/spots";


  constructor(private httpClient: HttpClient) {
  }
    // Create(data:any){
    //   return this.httpClient.post(this.url, data,{
    //     headers: new HttpHeaders().set('Content-Type', "application/json")
    //   })
    // }

    // Update(data:any){
    //   return this.httpClient.patch(this.url, data,{
    //     headers: new HttpHeaders().set('Content-Type', "application/json")
    //   })
    // }
    // getPlaces(){
    //   return this.httpClient.get(this.url);
    // }
}
