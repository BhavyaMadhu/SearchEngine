import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c-faculty',
  templateUrl: './c-faculty.component.html',
  styleUrls: ['./c-faculty.component.scss']
})
export class CFacultyComponent implements OnInit {
  @Input() facultyList;
  constructor() { }

  ngOnInit() {
  }

}
