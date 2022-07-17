import { Component, OnInit } from '@angular/core';
import { allProjects } from '../projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  tabletversion = false;
  smartphoneversion = false;
  allProjects: Object[] = [];
  hoveredCard = {};

  constructor() { }

  ngOnInit(): void {
    allProjects.forEach((project) => {
      this.allProjects.push(Object.assign({}, project));
    });
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

  visitProject(url: string) {
    window.open(url, "_blank");
  }

  /**
   * 
   * @param index - zeigt die nummer der richtigen Karte 
   */
   showCard(index: number) {
    this.hoveredCard[index] = true;
  }

  hideCard(index: number) {
    this.hoveredCard[index] = false;
  }

}
