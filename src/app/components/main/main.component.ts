import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.scss' ]
})
export class MainComponent implements OnInit {
  private activeLink = 'bio';
  isFull = true;

  constructor(readonly router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.activeLink = this.router.url;
      console.log(this.router.url);
    });
  }

  isLinkActive(link: string) {
    return this.activeLink === link;
  }

  toggleMenu() {
    this.isFull = !this.isFull;
  }
}
