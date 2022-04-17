import { Component, OnInit } from '@angular/core';
import { allProjects } from '../projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  smartphoneversion = false;
  allProjects: Object[] = [];
  hoveredCard = {};

  constructor() { }

  ngOnInit(): void {
    allProjects.forEach((project) => {
      this.allProjects.push(Object.assign({}, project));
    });

    if (window.screen.width <= 600) {
      this.smartphoneversion = true;
    }
    if (window.screen.width <= 740) {
      this.smartphoneversion = true;
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
