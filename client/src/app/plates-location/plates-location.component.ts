import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { PlateService } from '../plate.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plates-location',
  templateUrl: './plates-location.component.html',
  styleUrls: ['./plates-location.component.css']
})
export class PlatesLocationComponent implements OnInit {
  plate:any;

  error: any;
  constructor(private plates: PlateService,  private route : ActivatedRoute , private router: Router) { }

  ngOnInit() {
        this.route.params
          .subscribe((params) => {
            this.plates.getPlateList(params.location).subscribe( plates => this.successCb(plates));
            console.log(params.location)
          })
  }
  new (){
this.router.navigate(['/plates/new'])
  }
  errorCb(err) {
    this.error = err;
    this.plate = null;
  }

  successCb(value) {
    this.plate= value;
    this.error = null;
  }
  requestList(){
    
  }
}
