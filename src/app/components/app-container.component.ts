import {Component, ContentChild, ViewChild, Input, OnChanges} from '@angular/core';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
type Appbar = MatToolbar;
type SideNav = MatSidenav;
type SideNavMode = 'over' | 'push' | 'side';
type SideNavOpen = boolean;

@Component({
  selector: 'app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss'],
  host: {class: 'd-flex flex-column vh-100'}
})
export class AppContainerComponent {

  /* sidenav ref */
  @ContentChild('appbar') appbar: Appbar;
  @ViewChild('leftSideNav') leftSideNav: SideNav;
  @ViewChild('rightSideNav') rightSideNav: SideNav;

  private _showAppbar = true;
  private _showLeftSideNav = true;
  private _showRightSideNav = true;

  @Input()
  set showAppbar(val: string) {
    this._showAppbar = val === 'false' ? false : true;
  }
  get showAppbar(): boolean { return this._showAppbar; }

  @Input()
  set showLeftSideNav(val: string) {
    this._showLeftSideNav = val === 'false' ? false : true;
  }
  get showLeftSideNav(): string { return this._showLeftSideNav; }

  @Input()
  set showRightSideNav(val: boolean) {
    this._showRightSideNav = val === 'false' ? false : true;
  }
  get showRightSideNav(): boolean { return this._showRightSideNav; }

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
    this.togleSidenNav(this.leftSideNav, 'side', true);
    this.togleSidenNav(this.rightSideNav, 'side', false);
  }

  private activateHandsetLayout() {
    this.togleSidenNav(this.leftSideNav, 'over', false);
    this.togleSidenNav(this.rightSideNav, 'over', false);
  }

  private togleSidenNav(sideNav: SideNav, mode: SideNavMode, open: SideNavOpen) {
    sideNav.mode = mode;
    sideNav.opened = open;
  }

  private togleSidenNavEx(sideNav: SideNav) {
    if (sideNav) {
      sideNav.toggle();
    }
  }
  toggleLeft() {
    this.togleSidenNavEx(this.leftSideNav);
  }

  toggleRight() {
    this.togleSidenNavEx(this.rightSideNav);
  }

}
