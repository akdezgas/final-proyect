import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PlateService {
  BASE_URL:string= "http://localhost:3000/api/plate";

  plates:any;
  options : {withCredentials:true };
  constructor(private http: Http) {
  }

  getPlateList(location){
    return this.http.get(`${this.BASE_URL}/${location}`, this.options)
    .map(res => res.json());
  }

  newPlate(plates) {
    return this.http.post(`${this.BASE_URL}/new`, plates,this.options)
      .map(res => res.json())
  }

  getPlateDetails(id){
    return this.http.get(`${this.BASE_URL}/single/${id}`, this.options)
     .map(res => res.json());
  }

  //Remove y Edit
  edit(id,plate) {
    return this.http.put(`${this.BASE_URL}/single/${id}/edit`,plate, this.options)
     .map((res) => res.json());
  }
  delete(id){
    return this.http.delete(`${this.BASE_URL}/single/${id}/edit`,this.options)
     .map((res) => res.json());
  }

}
