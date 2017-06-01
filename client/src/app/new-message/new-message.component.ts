import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { ReviewService } from '../review.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
