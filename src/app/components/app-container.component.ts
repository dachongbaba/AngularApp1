import {Component, ContentChild, ViewChild, Input, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
type Appbar = MatToolbar;
type SideNav = MatSidenav;
type SideNavMode = 'over' | 'push' | 'side';
type SideNavOpen = boolean;

@Component({
  selector: 'app-container',
  templateUrl: './app-container.component.html',
  host: {class: 'd-flex flex-column vh-100'}
})
export class AppContainerComponent {
  @Input()
  get showTop(): boolean { return this._showTop; }
  set showTop(value: boolean) { this._showTop = coerceBooleanProperty(value); }
  private _showTop: boolean = false;

  @Input()
  get showContainer(): boolean { return this._showContainer; }
  set showContainer(value: boolean) { this._showContainer = coerceBooleanProperty(value); }
  private _showContainer: boolean = false;

  @Input()
  get showLeft(): boolean { return this._showLeft; }
  set showLeft(value: boolean) { this._showLeft = coerceBooleanProperty(value); }
  private _showLeft: boolean = false;

  @Input()
  get showCenter(): boolean { return this._showCenter; }
  set showCenter(value: boolean) { this._showCenter = coerceBooleanProperty(value); }
  private _showCenter: boolean = false;

  @Input()
  get showRight(): boolean { return this._showRight; }
  set showRight(value: boolean) { this._showRight = coerceBooleanProperty(value); }
  private _showRight: boolean = false;

  @Input()
  get showBottom(): boolean { return this._showBottom; }
  set showBottom(value: boolean) { this._showBottom = coerceBooleanProperty(value); }
  private _showBottom: boolean = false;

  /* sidenav ref */
  @ContentChild('topAppBar') topAppBar: Appbar;
  @ViewChild('leftSide') leftSide: SideNav;
  @ViewChild('rightSide') rightSide: SideNav;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Large
    ]).subscribe(result => {
      console.log('Breakpoin', result.matches, result.breakpoints);
      if (result.matches) {
        // this.activateWebLayout();
      } else {
        // this.activateHandsetLayout();
      }
    });

  }

  private activateWebLayout() {
    this.togleSidenNav(this.leftSide, 'side', true);
    this.togleSidenNav(this.rightSide, 'side', false);
  }

  private activateHandsetLayout() {
    this.togleSidenNav(this.leftSide, 'over', false);
    this.togleSidenNav(this.rightSide, 'over', false);
  }

  private togleSidenNav(side: SideNav, mode: SideNavMode, open: SideNavOpen) {
    side.mode = mode;
    side.opened = open;
  }

  private togleSidenNavEx(side: SideNav) {
    if (side) {
      side.toggle();
    }
  }
  toggleLeft() {
    this.togleSidenNavEx(this.leftSide);
  }

  toggleRight() {
    this.togleSidenNavEx(this.rightSide);
  }

}
