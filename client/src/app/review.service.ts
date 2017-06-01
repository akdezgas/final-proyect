import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../environments/environment';
const  BASE_URL:string= environment.baseurl;

@Injectable()
export class ReviewService {
  options : {withCredentials:true};
  messageEvent = new EventEmitter<any>();

  constructor(private http: Http) {
  }

  createReview(message) {
      return this.http.post(`${BASE_URL}/api/review/new`, message, this.options)
        .map(res => {
          return res.json();
        })
        .catch(this.handleError)
    }
    showReview(id) {
      return this.http.get(`${BASE_URL}/api/review/${id}`, this.options)
        .map(res => res.json())
        .catch((err) => this.handleError(err))
    }
    showUserMessages(id){
      return this.http.get(`${BASE_URL}/api/review/inbox/${id}`, this.options)
        .map(res => res.json())
        .map(messages => {this.messageEvent.emit(messages); return messages})
        .catch((err) => this.handleError(err))
    }

    handleError(e) {
      return Observable.throw(e.json().message);
    }
    deleteReview(id){
      return this.http.get(`${BASE_URL}/api/review/delete/${id}`,this.options)
      .map(res => res.json())
      .catch((err) => this.handleError(err))
    }
}
