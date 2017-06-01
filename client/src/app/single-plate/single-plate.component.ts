import { Component, OnInit } from '@angular/core';
import { PlateService } from '../plate.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SebmGoogleMap, SebmGoogleMapMarker } from 'angular2-google-maps/core';


@Component({
  selector: 'app-single-plate',
  templateUrl: './single-plate.component.html',
  styleUrls: ['./single-plate.component.css']
})
export class SinglePlateComponent implements OnInit {
  plate:any;

  constructor(private plateService: PlateService,private route : ActivatedRoute , private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        console.log(params);
        this.plateService.getPlateDetails(params.id).subscribe( plate => this.plate = plate);
      })

  }
  addguest(plate){
    console.log(this.plate.guests)
    this.plateService.addGuest(this.plate._id, {guests: this.plate.guests + 1})
        .subscribe(
          plate => this.plate = plate
        )
    this.router.navigate(['/plates/' + this.plate.location])
  }



}
