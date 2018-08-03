import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c-events',
  templateUrl: './c-events.component.html',
  styleUrls: ['./c-events.component.scss'],
})
export class CEventsComponent implements OnInit {
  @Input() eventsList;
  constructor() {}

  ngOnInit() {}
}
