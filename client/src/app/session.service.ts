import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SessionService {
  BASE_URL: string = 'http://localhost:3000/api/user';
  user;
  constructor(private http: Http) { }

  signup(user) {
    console.log(user);
    console.log('test');
    return this.http.post(`${this.BASE_URL}/signup`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {

    return this.http.post(`${this.BASE_URL}/login`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  edit(id) {
    return this.http.put(`${this.BASE_URL}/${id}/edit`, {withCredentials:true})
     .map((res) => res.json());
  }

  isLogged() {
    return this.http.get(`${this.BASE_URL}/loggedin`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`${this.BASE_URL}/logout`, {})
      .map(res => res.json())
      .catch(this.handleError);
  }
  delete(id){
    return this.http.delete(`${this.BASE_URL}/${id}/edit`)
     .map((res) => res.json());
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  getPrivateData() {
    return this.http.get(`${this.BASE_URL}/private`)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
