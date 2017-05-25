import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  formInfo = {
    username: '',
    password: ''
  };
  error: string;
  constructor(private session: SessionService, private router : Router) { }

  ngOnInit() {
  }

  login() {
      this.session.login(this.formInfo)
        .subscribe(
          (user) => this.successCb(user),
          (err) => this.errorCb(err)
        );
        
    }

    errorCb(err) {
      this.error = err;
      this.user = null;
    }

    successCb(user) {
      this.user = user;
      this.error = null;
      this.router.navigate(['/select'])
    }
}
