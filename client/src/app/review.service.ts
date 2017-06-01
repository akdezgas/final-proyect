import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ReviewService {
  BASE_URL:string= "http://localhost:3000/api/review";
  options : {withCredentials:true};
  messageEvent = new EventEmitter<any>();
  BASEURL: String = "http://localhost:3000/api/review";
  constructor(private http: Http) {
  }

  createReview(message) {
      return this.http.post(`${this.BASEURL}/new`, message, this.options)
        .map(res => {
          return res.json();
        })
        .catch(this.handleError)
    }
    showReview(id) {
      return this.http.get(`${this.BASEURL}/${id}`, this.options)
        .map(res => res.json())
        .catch((err) => this.handleError(err))
    }
    showUserMessages(id){
      return this.http.get(`${this.BASEURL}/inbox/${id}`, this.options)
        .map(res => res.json())
        .map(messages => {this.messageEvent.emit(messages); return messages})
        .catch((err) => this.handleError(err))
    }

    handleError(e) {
      return Observable.throw(e.json().message);
    }
    deleteReview(id){
      return this.http.get(`${this.BASEURL}/delete/${id}`,this.options)
      .map(res => res.json())
      .catch((err) => this.handleError(err))
    }
}
