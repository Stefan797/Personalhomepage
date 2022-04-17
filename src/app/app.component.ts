import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Personalhomepage';

  ngOnInit(): void {
    console.log('meine Bildschirmbreite ist', window.innerWidth);
  }
}
