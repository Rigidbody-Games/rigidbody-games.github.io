import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  pageLinks: Array<any> = [
    {
      "name": "Home",
      "url": "",
    },
    {
      "name": "Privacy",
      "url": "/privacy",
    },
  ]

  constructor(public location: Location) { }
}
