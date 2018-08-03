import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationStart } from "@angular/router";

@Component({
  selector: '.app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  showNavbar;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.showNavbar = (event.url.indexOf('tufts') !== -1) ? true : false;
      }
    });
  }

}
