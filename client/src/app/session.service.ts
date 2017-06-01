import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../environments/environment';
const  BASE_URL:string= environment.baseurl;
@Injectable()
export class SessionService {
  user: any;
  loginEvent: EventEmitter<any> = new EventEmitter();
  options: {withCredentials:true}

  constructor(private http: Http) { }

  getLoginEmitter() : EventEmitter<any>{
    return this.loginEvent;
  }

  signup(user) {

    return this.http.post(`${BASE_URL}/api/user/signup`, user,this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {

    return this.http.post(`${BASE_URL}/api/user/login`, user,this.options)
      .map(res => res.json())
      .map(user => { this.loginEvent.emit(user); this.user = user; return user;})
      .catch(this.handleError);
  }

  edit(id,user) {
    return this.http.put(`${BASE_URL}/api/user/${id}/edit`,user, this.options)
     .map((res) => res.json());
  }

  isLogged() {
    console.log("is loggin")
    return this.http.get(`${BASE_URL}/api/user/loggedin`,this.options)
      .map(res => res.json())
      .map(user => {this.user=user; return user;})
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`${BASE_URL}/api/user/logout`, {},this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }
  delete(id){
    return this.http.delete(`${BASE_URL}/api/user/${id}/edit`,this.options)
     .map((res) => res.json());
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  getPrivateData() {
    return this.http.get(`${BASE_URL}/api/user/private`,this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
