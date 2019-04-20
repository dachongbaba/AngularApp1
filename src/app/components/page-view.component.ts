<<<<<<< HEAD
import {Component, HostBinding, ViewChild } from '@angular/core';
=======
import {Component, HostBinding, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
>>>>>>> 6d7083b4252ca22ca6bc45ad23964a3e9f8e93da
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {MatDrawer} from '@angular/material';


@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html'
})
export class PageViewComponent {
  @HostBinding('class') class = 'flex-grow-1 d-flex flex-column';
  @ViewChild('leftDrawer') leftDrawer: MatDrawer;
  @ViewChild('rightDrawer') rightDrawer: MatDrawer;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Large
    ]).subscribe(result => {
      if (result.matches) {
        console.log('pave-view Large Layout', result.breakpoints);
        this.activateLargeLayout();
      }
    });
    breakpointObserver.observe([
      Breakpoints.Medium
    ]).subscribe(result => {
      if (result.matches) {
        console.log('pave-view activate Medium Layout', result.breakpoints);
        this.activateMediumLayout();
      }
    });
    breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe(result => {
      if (result.matches) {
        console.log('pave-view activate Small Layout', result.breakpoints);
        this.activateSmallLayout();
      }
    });
  }

  private activateLargeLayout() {
    this.togleSide(this.leftDrawer, 'side', true);
    this.togleSide(this.rightDrawer, 'side', true);
  }

  private activateMediumLayout() {
    this.togleSide(this.leftDrawer, 'side', true);
    this.togleSide(this.rightDrawer, 'side', false);
  }

  private activateSmallLayout() {
    this.togleSide(this.leftDrawer, 'over', false);
    this.togleSide(this.rightDrawer, 'over', false);
  }

  private togleSide(drawer: MatDrawer, mode: 'side' | 'over', open: boolean) {
    drawer.mode = mode;
    drawer.opened = open;
  }

  toggleLeft() {
    this.leftDrawer.toggle();
  }

  toggleRight() {
    this.rightDrawer.toggle();
  }
}
