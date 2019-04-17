import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { ViewChild, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { MatToolbar, MatDrawer } from '@angular/material';

type Toolbar = MatToolbar;
type Drawer = MatDrawer;
type DrawerMode = 'over' | 'push' | 'side';
type DrawerOpen = boolean;

@Component({
  selector: 'app-container-layout',
  templateUrl: './app-container-layout.component.html',
  styleUrls: ['./app-container-layout.component.scss'],
  host: {class: 'd-flex flex-column h-100'}
})
export class AppContainerLayoutComponent implements OnInit, OnDestroy {
  @ViewChild('toolbar') toolbar: Toolbar;
  @ViewChild('drawerLeft') drawerLeft: Drawer;
  @ViewChild('drawerRight') drawerRight: Drawer;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Medium,
      Breakpoints.Large,
    ]).subscribe(result => {
      console.log('Breakpoin', result.matches, result.breakpoints);
      if (result.matches) {
        this.activateWebLayout();
      } else {
        this.activateHandsetLayout();
      }
    });
  }

  private activateWebLayout() {
    this.toggleDrawer(this.drawerLeft, 'side', true);
    //this.toggleDrawer(this.drawerRight, 'side', false);
  }

  private activateHandsetLayout() {
    this.toggleDrawer(this.drawerLeft, 'over', false);
    //this.toggleDrawer(this.drawerRight, 'over', false);
  }

  private toggleDrawer(drawer: Drawer, mode: DrawerMode, open: DrawerOpen) {
    if (drawer) {
      drawer.mode = mode;
      drawer.opened = open;
    }
  }

  toggleLeft() {
    this.drawerLeft.toggle();
  }

  toggleRight() {
    this.drawerRight.toggle();
  }
}
