import {Component, HostBinding, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html'
})
export class PageLayoutComponent {
  @HostBinding('class') class = 'd-flex flex-column vh-100';
  @ViewChild('toolbar') topAppbar: MatToolbar;
  @ViewChild('leftSide') leftSide: MatSidenav;
  @ViewChild('rightSide') rightSide: MatSidenav;

  toggleLeft() {
    this.leftSide.toggle();
  }

  toggleRight() {
    this.rightSide.toggle();
  }
}
