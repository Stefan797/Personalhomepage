import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  smartphonemenu: boolean;

  constructor() { }

  ngOnInit(): void {
    if (window.screen.width <= 600) {
      this.smartphonemenu = true;
    }
  }

}
