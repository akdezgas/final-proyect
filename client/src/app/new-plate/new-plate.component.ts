import { Component, OnInit } from '@angular/core';
import { PlateService } from '../plate.service';
import { SessionService } from '../session.service';
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
  feedback: any;
  loggedUser:any;
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
              private router: Router) { }

  ngOnInit() {
    this.userSession.isLogged().subscribe( user => this.successCb(user));
    this.userSession.getLoginEmitter().subscribe(user => this.successCb(user));
    console.log(this.loggedUser)
  }

  newq() {
    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = true;
    }
  this.uploader.onBuildItemForm = (item, form) => {

    form.append('name', this.formInfo.name);
    form.append('origin', this.formInfo.origin);
    form.append('description', this.formInfo.description);
    form.append('location', this.formInfo.location);
    form.append('price', this.formInfo.price);

  };
  this.uploader.uploadAll();
  this.router.navigate(['/plates', this.formInfo.location])
}
  errorCb(err) {
    this.error = err;
    this.plate = null;
  }

  successCb(val) {
    this.loggedUser = val;
    this.error = null;
  }

}
