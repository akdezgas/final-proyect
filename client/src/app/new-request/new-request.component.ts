import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { SessionService } from '../session.service';
import $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {
  request:any;
  user:any;
  formInfo = {
    title: '',
    origin: '',
    description: '',
    location: '',
    price: ''
  };
  error:string;
  constructor(private requestSession: RequestService,
               private userSession: SessionService,
               private router: Router,) { }

  ngOnInit() {
    this.userSession.isLogged().subscribe( user => this.successCb(user));
    this.userSession.getLoginEmitter().subscribe(user => this.successCb(user));
    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
  }
  newq(){
    this.requestSession.newRequest(this.formInfo)
        .subscribe(
          (request) => this.successCb (request),
          (err) => this.errorCb (err)
        );
  }
  errorCb(err) {
    this.error = err;
    this.user = null;
  }

  successCb(val) {
    this.user = val;
    this.error = null;
  }
}
