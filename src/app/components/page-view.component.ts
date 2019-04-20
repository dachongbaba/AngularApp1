import {Component, HostBinding, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {MatDrawer} from '@angular/material';


@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html'
})
export class PageViewComponent {

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

  @HostBinding('class') class = 'flex-grow-1 d-flex flex-column';
  @ViewChild('leftDrawer') leftDrawer: MatDrawer;
  @ViewChild('rightDrawer') rightDrawer: MatDrawer;

  togleSide(drawer: MatDrawer, mode: 'side' | 'over', open: boolean) {
    drawer.mode = mode;
    drawer.opened = open;
    return this;
  }

  private activateLargeLayout() {
    this
      .togleSide(this.leftDrawer, 'side', true)
      .togleSide(this.rightDrawer, 'side', true);
  }

  private activateMediumLayout() {
    this
      .togleSide(this.leftDrawer, 'side', true)
      .togleSide(this.rightDrawer, 'side', false);
  }

  private activateSmallLayout() {
    this
      .togleSide(this.leftDrawer, 'over', false)
      .togleSide(this.rightDrawer, 'over', false);
  }

  toggleLeft() {
    this.leftDrawer.toggle();
  }

  toggleRight() {
    this.rightDrawer.toggle();
  }
}
