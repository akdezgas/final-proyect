import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { PlateService } from '../plate.service';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
        $('select').material_select();
  }

}
