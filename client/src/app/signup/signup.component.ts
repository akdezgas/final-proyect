import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: any;
  formInfo = {
    username: '',
    password: '',
    email: ''
  };
  error: string;

  constructor(private session: SessionService, private router : Router) {};

  ngOnInit() {
  }

  signup() {
  this.session.signup(this.formInfo)
    .subscribe(
      (user) => this.successCb(user),
      (err) => this.errorCb(err)
    );
    this.router.navigate(['/user/login'])
  }

errorCb(err) {
  this.error = err;
  this.user = null;
}

successCb(user) {
  this.user = user;
  this.error = null;
}
}
