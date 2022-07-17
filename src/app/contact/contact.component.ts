import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  smartphoneversion = false;
  tabletversion = false;
  constructor() { }

  ngOnInit(): void {
    if (window.screen.width <= 740) {
      this.smartphoneversion = true;
      console.log('smartphoneversion true');
    } else if (window.screen.width >= 741 && window.screen.width <= 1050) {
      this.tabletversion = true;
      console.log('tabletversion true');
    }
    if (this.smartphoneversion == false && this.tabletversion == false) {
      console.log('computerversion true');
    }
  }

}
