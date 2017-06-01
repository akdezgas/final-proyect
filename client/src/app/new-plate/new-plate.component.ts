import { Component, OnInit } from '@angular/core';
import { PlateService } from '../plate.service';
import { SessionService } from '../session.service';
import $ from 'jquery';
import { FileUploader} from "ng2-file-upload";
import { Router } from '@angular/router';
import { MapsAPILoader } from 'angular2-google-maps/core';
declare var google: any;
import { ViewChild, ElementRef } from '@angular/core';
import { SebmGoogleMap, SebmGoogleMapMarker } from 'angular2-google-maps/core';


@Component({
  selector: 'app-new-plate',
  templateUrl: './new-plate.component.html',
  styleUrls: ['./new-plate.component.css']
})

export class NewPlateComponent implements OnInit {
  addressLat:number =  52.507417;
  addressLng:number = 6.085781;

  plate: any;
  feedback: any;
  user:any;
  formInfo = {

    name: '',
    origin: '',
    description: '',
    location: '',
    price: ''
  };
  error: string;
  uploader: FileUploader = new FileUploader({
    url: 'http://localhost:3000/api/plate/new'
  });


  constructor( private plateSession: PlateService,
               private userSession: SessionService,
               private router: Router,
               private _loader: MapsAPILoader
            ) { }

  ngOnInit() {
    if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((location) => {
                this.setLatLng(location.coords.latitude, location.coords.longitude);
            });
    this.userSession.getLoginEmitter().subscribe(user => this.user=user);
    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
  }

     }

     setLatLng(lat:number, lng:number) {
       this.addressLat = lat;
       this.addressLng = lng;
   }
  newq() {
    console.log(this.addressLat)
  this.uploader.onBuildItemForm = (item, form) => {

    form.append('name', this.formInfo.name);
    form.append('origin', this.formInfo.origin);
    form.append('description', this.formInfo.description);
    form.append('price', this.formInfo.price);
    form.append('location', this.formInfo.location);
    form.append('addressLng', this.addressLng);
    form.append('addressLat', this.addressLat);
  };
  this.uploader.uploadAll();
  this.router.navigate(['/plates', this.formInfo.location])
}

}
