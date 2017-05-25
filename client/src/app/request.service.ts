import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class RequestService {
  BASE_URL:string = 'http://localhost:3000/api/request';
  request:any;
  options : {withCredentials:true };
  constructor(private http: Http) {
  }

  getRequestList(){
    return this.http.get(`${this.BASE_URL}/`, this.options)
    .map(res => res.json());
  }


  getSingleRequest(id){
    return this.http.get(`${this.BASE_URL}/${id}`, this.options)
     .map(res => res.json());
  }

  newRequest(request) {
    return this.http.post(`${this.BASE_URL}/new`, request,this.options)
      .map(res => res.json())
  }

  //Remove y Edit
  edit(id,request) {
    return this.http.put(`${this.BASE_URL}/${id}/edit`,request, this.options)
     .map((res) => res.json());
  }
  delete(id){
    return this.http.delete(`${this.BASE_URL}/${id}/edit`,this.options)
     .map((res) => res.json());
  }

}
