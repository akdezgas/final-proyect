import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ReviewService {
  BASE_URL:string= "http://localhost:3000/api/review";
  options : {withCredentials:true};
  review:any;
  constructor(private http: Http) {
  }

  newReview(review) {
    return this.http.post(`${this.BASE_URL}/new`, review,this.options)
      .map(res => res.json())
  }

}
