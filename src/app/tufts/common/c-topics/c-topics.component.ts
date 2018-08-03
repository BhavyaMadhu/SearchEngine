import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c-topics',
  templateUrl: './c-topics.component.html',
  styleUrls: ['./c-topics.component.scss']
})
export class CTopicsComponent implements OnInit {
  @Input() topicsList;
  @Input() dynamicBorder;
  constructor() { }

  ngOnInit() {
  }

}
