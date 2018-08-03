import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavItems } from '../../app.interface';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  public categories: NavItems[];
  public count: number;
  @Input() currentRoute;
  constructor(private commonService: CommonService, private router: Router) {
    this.categories = [
      {
        category: 'Summary',
        routerLink: '/tufts/summary',
        count: 0,
      },
      {
        category: 'Faculty',
        routerLink: '/tufts/faculties',
        count: 0,
      },
    ];
  }
}
