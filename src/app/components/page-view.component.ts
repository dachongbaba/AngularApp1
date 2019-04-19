import {Component, HostBinding, ViewChild } from '@angular/core';
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
        console.log('pave-view big Layout', result.breakpoints);
        this.activateBigLayout();
      }
    });
    breakpointObserver.observe([
      Breakpoints.Medium
    ]).subscribe(result => {
      if (result.matches) {
        console.log('pave-view activate standard Layout', result.breakpoints);
        this.activateWebLayout();
      }
    });
    breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe(result => {
      if (result.matches) {
        console.log('pave-view activate small Layout', result.breakpoints);
        this.activateSmallLayout();
      }
    });
  }

  private activateBigLayout() {
    this.togleSide(this.leftDrawer, 'side', true);
    this.togleSide(this.rightDrawer, 'side', true);
  }

  private activateWebLayout() {
    this.togleSide(this.leftDrawer, 'side', true);
    this.togleSide(this.rightDrawer, 'side', false);
  }

  private activateSmallLayout() {
    this.togleSide(this.leftDrawer, 'over', false);
    this.togleSide(this.rightDrawer, 'over', false);
  }

  private togleSide(drawer: MatDrawer, mode: 'side'|'over', open: boolean) {
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
