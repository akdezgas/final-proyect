import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SessionService {
  BASE_URL: string = 'http://localhost:3000/api/user';
  user: any;
  loginEvent: EventEmitter<any> = new EventEmitter();
  options: {withCredentials:true}
  constructor(private http: Http) { }

  getLoginEmitter() : EventEmitter<any>{
    return this.loginEvent;
  }

  signup(user) {

    return this.http.post(`${this.BASE_URL}/signup`, user,this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {

    return this.http.post(`${this.BASE_URL}/login`, user,this.options)
      .map(res => res.json())
      .map(user => { this.loginEvent.emit(user); this.user = user; return user;})
      .catch(this.handleError);
  }

  edit(id,user) {
    return this.http.put(`${this.BASE_URL}/${id}/edit`,user, this.options)
     .map((res) => res.json());
  }

  isLogged() {
    console.log("is loggin")
    return this.http.get(`${this.BASE_URL}/loggedin`,this.options)
      .map(res => res.json())
      .map(user => {this.user=user; return user;})
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`${this.BASE_URL}/logout`, {},this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }
  delete(id){
    return this.http.delete(`${this.BASE_URL}/${id}/edit`,this.options)
     .map((res) => res.json());
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  getPrivateData() {
    return this.http.get(`${this.BASE_URL}/private`,this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
