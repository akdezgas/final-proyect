import { Component, OnInit } from '@angular/core';
import { PlateService } from '../plate.service';
import $ from 'jquery';
import { FileUploader} from "ng2-file-upload";
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-plate',
  templateUrl: './new-plate.component.html',
  styleUrls: ['./new-plate.component.css']
})
export class NewPlateComponent implements OnInit {
  plate: any;
  formInfo = {
    name: '',
    origin: '',
    description: ''
  };
  error: string;
  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/api/plate/new`
  });
  constructor( private plateSession: PlateService,
              private router: Router) { }

  ngOnInit() {

  }
  upload() {
  this.uploader.uploadAll();
  this.plateSession.newPlate(this.formInfo)
    .subscribe(
      (plate) => this.successCb(plate),
      (err) => this.errorCb(err)
    );
    console.log(this.uploader)
    this.router.navigate(['/select'])
  }
  errorCb(err) {
    this.error = err;
    this.plate = null;
  }

  successCb(plate) {
    this.plate = plate;
    this.error = null;
  }

}
