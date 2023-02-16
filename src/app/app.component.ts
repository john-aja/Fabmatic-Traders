import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fabmatic-trading';
  openMenuContainer: boolean = false;

  openMenu() {
    this.openMenuContainer = true;
  }
  scroll(el: HTMLElement) {
    this.openMenuContainer = false;
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
