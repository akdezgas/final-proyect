import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-requests-location',
  templateUrl: './requests-location.component.html',
  styleUrls: ['./requests-location.component.css']
})
export class RequestsLocationComponent implements OnInit {
  request:any;
  error: any;

  constructor(private requests: RequestService,  private route : ActivatedRoute , private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.requests.getRequestList(params.location).subscribe( requests => this.successCb(requests));
        console.log(params.location)
      })
  }
  errorCb(err) {
    this.error = err;
    this.request = null;
  }

  successCb(value) {
    this.request= value;
    this.error = null;
  }

}
