import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user: any;
  formInfo = {
    username: '',
    password: '',
    email: ''
  };
  error: string;
  constructor(private session: SessionService, private router : Router) { }

  ngOnInit() {
    this.successCb(this.session.user);
  }
  edit(){

    this.session.edit(this.user._id, this.formInfo)
        .subscribe(
          (user) => this.successCb(user),
          (err) => this.errorCb(err)

        );
        this.router.navigate(['/'])
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
