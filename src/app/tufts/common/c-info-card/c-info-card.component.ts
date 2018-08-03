import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c-info-card',
  templateUrl: './c-info-card.component.html',
  styleUrls: ['./c-info-card.component.scss']
})
export class CInfoCardComponent implements OnInit {
  @Input() personEntity;
  constructor() { }

  ngOnInit() {
  }

}
