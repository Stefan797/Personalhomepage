import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  smartphoneversion = false;

  constructor() { }

  ngOnInit(): void {
    if (window.screen.width <= 600) {
      this.smartphoneversion = true;
    }
    if (window.screen.width <= 740) {
      this.smartphoneversion = true;
    }
  }

}
