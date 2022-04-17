import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  scroll(id: string){
    document.getElementById(id).scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

}
