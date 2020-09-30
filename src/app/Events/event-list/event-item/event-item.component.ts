import { Component, OnInit } from '@angular/core';
import { Event } from "../../event.model";


@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  // title: string = "Test title";
  // image: string = "https://piotrkowalski.pw/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png";

  currentEvent = new Event("TEST", "TEST DESCRIPTION", "https://piotrkowalski.pw/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png", "01/10/2020");

  constructor() { }

  ngOnInit() {
  }

}
