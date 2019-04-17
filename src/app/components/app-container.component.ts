import {Component, ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

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
  @ViewChild('sideNavLeft') sideNavLeft: SideNav;
  @ViewChild('sideNavRight') sideNavRight: SideNav;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Large
    ]).subscribe(result => {
      console.log('Breakpoin', result.matches, result.breakpoints)
      if (result.matches) {
        this.activateWebLayout();
      } else {
        this.activateHandsetLayout();
      }
    });

  }

  private activateWebLayout() {
    const mode = 'side';
    this.toggleSidenav(this.sideNavLeft, 'side', true);
    this.toggleSidenav(this.sideNavRight, 'side', false);
  }

  private activateHandsetLayout() {
    this.toggleSidenav(this.sideNavLeft, 'over', false);
    this.toggleSidenav(this.sideNavRight, 'over', false);
  }

  private toggleSidenav(sideNav: SideNav, mode: SideNavMode, open: SideNavOpen) {
    sideNav.mode = mode;
    sideNav.opened = open;
  }
}
