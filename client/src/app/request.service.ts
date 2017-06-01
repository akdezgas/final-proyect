import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../environments/environment';
const  BASE_URL:string= environment.baseurl;

@Injectable()
export class RequestService {

  request:any;
  options : {withCredentials:true };
  constructor(private http: Http) {
  }

  getRequestList(location){
    return this.http.get(`${BASE_URL}/api/request/${location}`, this.options)
    .map(res => res.json());
  }


  getSingleRequest(id){
    return this.http.get(`${BASE_URL}/api/request/${id}`, this.options)
     .map(res => res.json());
  }

  newRequest(request) {
    return this.http.post(`${BASE_URL}/api/request/new`, request,this.options)
      .map(res => res.json())
  }

  //Remove y Edit
  edit(id,request) {
    return this.http.put(`${BASE_URL}/api/request/${id}/edit`,request, this.options)
     .map((res) => res.json());
  }
  delete(id){
    return this.http.delete(`${BASE_URL}/api/request/${id}/edit`,this.options)
     .map((res) => res.json());
  }

}
