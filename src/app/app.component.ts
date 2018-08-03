import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonService } from './common/services/common.service';

@Component({
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  setWrapper: boolean = false;
  constructor(private commonService: CommonService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      } else {
        this.router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
    this.commonService.showNav.subscribe((value) => {
      this.setWrapper = value;
      console.log(this.setWrapper);
    })
  }

}