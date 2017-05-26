import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { PlateService } from '../plate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {


  constructor(private plates: PlateService, private router : Router) {
  }

  ngOnInit() {
    $('input.autocomplete').autocomplete({
      data: {
        "A coruña": null,
        "Madrid ": null,
        "Huelva": null,
        "Barcelona": 'http://placehold.it/250x250'
      },
      limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
      onAutocomplete: (location) => {
   // Callback function when value is autcompleted.

   //Arrow function Bind difference to normal function
              
        this.router.navigate(['/plates',location])
      },
      minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
    });
  }
}
