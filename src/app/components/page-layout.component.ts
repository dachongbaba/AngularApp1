import {Component, HostBinding, ViewChild } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
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

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.XLarge
    ]).subscribe(result => {
      if (result.matches) {
        console.log('page-layout activate web Layout', result.breakpoints);
        this.activateWebLayout();
      } else {
        console.log('page-layout activate small Layout', result.breakpoints);
        this.activateSmallLayout();
      }
    });

  }

  private activateWebLayout() {
    this.togleSide(this.leftSide, 'side', true);
    this.togleSide(this.rightSide, 'side', false);
  }

  private activateSmallLayout() {
    this.togleSide(this.leftSide, 'over', false);
    this.togleSide(this.rightSide, 'over', false);
  }

  private togleSide(side: MatSidenav, mode: 'side'|'over', open: boolean) {
    side.mode = mode;
    side.opened = open;
  }

  toggleLeft() {
    this.leftSide.toggle();
  }

  toggleRight() {
    this.rightSide.toggle();
  }
}
