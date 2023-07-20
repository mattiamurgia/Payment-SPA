import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isNavbarTransparent: boolean = true;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isNavbarTransparent = window.pageYOffset === 0;
  }
}
