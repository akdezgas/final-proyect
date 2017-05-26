import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { PlateService } from '../plate.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-plates',
  templateUrl: './plates.component.html',
  styleUrls: ['./plates.component.css']
})
export class PlatesComponent implements OnInit {
  plate:any;
  error: any;
  constructor(private plates: PlateService, private route : ActivatedRoute ) { }

  ngOnInit() {

      this.route.params
      .subscribe((params) => {
        this.plates.getPlateList(params.location).subscribe( plates => this.successCb(plates));
        console.log(params.location)
      })



  }
  errorCb(err) {
    this.error = err;
    this.plate = null;
  }

  successCb(value) {
    this.plate= value;
    this.error = null;
  }
}
