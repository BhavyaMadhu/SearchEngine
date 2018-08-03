import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c-research',
  templateUrl: './c-research.component.html',
  styleUrls: ['./c-research.component.scss']
})
export class CResearchComponent implements OnInit {
  @Input() researchList;
  constructor() { }

  ngOnInit() {
  }

}
