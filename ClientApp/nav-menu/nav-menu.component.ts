import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  //isExpanded = false;
  public body = document.body;
  public lastScroll = 0;
  //collapse() {
  //  this.isExpanded = false;
  //}

  //toggle() {
  //  this.isExpanded = !this.isExpanded;
  //}
  public toggleMenu = false;
  toggle() {
    this.toggleMenu = !this.toggleMenu;
  }
  public toggleDrop = false;
  toggleDropdown() {
    this.toggleDrop = !this.toggleDrop;
  }
  //dodaj active;

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      this.body.classList.remove("scroll-up");
    }
    if (currentScroll > this.lastScroll && !this.body.classList.contains("scroll-down")) {
      this.body.classList.remove("scroll-up");
      this.body.classList.add("scroll-down");
      this.toggleDrop = false;
    }
    if (currentScroll < this.lastScroll && this.body.classList.contains("scroll-down")) {
      this.body.classList.remove("scroll-down");
      this.body.classList.add("scroll-up");
    }
    this.lastScroll = currentScroll;
  }
}
