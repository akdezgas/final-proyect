import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../environments/environment';
const  BASE_URL:string= environment.baseurl;

@Injectable()
export class PlateService {


  plates:any;
  options : {withCredentials:true };
  constructor(private http: Http) {
  }

  getPlateList(location){
    return this.http.get(`${BASE_URL}/api/plate/${location}`, this.options)
    .map(res => res.json());
  }

  newPlate(plates) {
    return this.http.post(`${BASE_URL}/api/plate/new`, plates,this.options)
      .map(res => res.json())
  }

  getPlateDetails(id){
    return this.http.get(`${BASE_URL}/api/plate/single/${id}`, this.options)
     .map(res => res.json());
  }

  addGuest(id,plate) {
    return this.http.put(`${BASE_URL}/api/plate/single/guest/${id}`,plate, this.options)
     .map((res) => res.json());
  }

  //Remove y Edit
  edit(id,plate) {
    return this.http.put(`${BASE_URL}/api/plate/single/${id}/edit`,plate, this.options)
     .map((res) => res.json());
  }
  delete(id){
    return this.http.delete(`${BASE_URL}/api/plate/single/${id}/edit`,this.options)
     .map((res) => res.json());
  }


}
