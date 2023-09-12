import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isNavbarCollapsed: boolean = true;

  isContentVisible: boolean = false;

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }


  closeNavbar(): void {
    this.isNavbarCollapsed = true;
  }


  toggleContent() {
    this.isContentVisible = !this.isContentVisible;
  }

  toggleContentClose() {
    this.isContentVisible = false;
  }
}
