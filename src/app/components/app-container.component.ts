import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
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
export class AppContainerComponent implements OnInit {

  /* sidenav ref */
  @ViewChild('leftContainer') leftContainer: ElementRef;
  @ViewChild('rightContainer') rightContainer: ElementRef;
  @ViewChild('leftSideNav') leftSideNav: SideNav;
  @ViewChild('rightSideNav') rightSideNav: SideNav;
  showLeftSideNav: boolean = false;
  showRightSideNav: boolean = false;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Large
    ]).subscribe(result => {
      console.log('Breakpoin', result.matches, result.breakpoints)
      if (result.matches) {
        // this.activateWebLayout();
      } else {
        // this.activateHandsetLayout();
      }
    });

  }

  private activateWebLayout() {
    this.toggleSidenav(this.leftSideNav, 'side', true);
    this.toggleSidenav(this.rightSideNav, 'side', false);
  }

  private activateHandsetLayout() {
    this.toggleSidenav(this.leftSideNav, 'over', false);
    this.toggleSidenav(this.rightSideNav, 'over', false);
  }

  private toggleSidenav(sideNav: SideNav, mode: SideNavMode, open: SideNavOpen) {
    sideNav.mode = mode;
    sideNav.opened = open;
  }

  toggleLeft() {
    this.leftSideNav.toggle();
  }

  toggleRight() {
    this.rightSideNav.toggle();
  }

  ngOnInit(): void {
    if (!this.leftContainer.nativeElement.hasChildNodes()) {
      this.showLeftSideNav = true;
    }
    if (!this.rightContainer.nativeElement.hasChildNodes()) {
      this.showRightSideNav = true;
    }
    console.log(this.rightContainer);
  }
}
