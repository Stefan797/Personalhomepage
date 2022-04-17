import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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
