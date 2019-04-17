import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { ViewChild, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { MatDrawer } from '@angular/material';

type Drawer = MatDrawer;
type DrawerMode = 'over' | 'push' | 'side';
type DrawerOpen = boolean;

@Component({
  selector: 'app-container-view',
  templateUrl: './app-container-view.component.html',
  styleUrls: ['./app-container-view.component.scss'],
  host: {class: 'd-flex flex-column mh-100'}
})
export class AppContainerViewComponent implements OnInit, OnDestroy {

  /* sidenav ref */
  @ViewChild('drawerLeft') drawerLeft: Drawer;
  @ViewChild('drawerRight') drawerRight: Drawer;

  @ViewChild('customerContent') customerContent: ElementRef;
  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Medium,
      Breakpoints.Large,
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
    this.toggleDrawer(this.drawerLeft, 'side', true);
    this.toggleDrawer(this.drawerRight, 'side', false);
  }

  private activateHandsetLayout() {
    this.toggleDrawer(this.drawerLeft, 'over', false);
    this.toggleDrawer(this.drawerRight, 'over', false);
  }

  private toggleDrawer(drawer: Drawer, mode: DrawerMode, open: DrawerOpen) {
    drawer.mode = mode;
    drawer.opened = open;
  }

  ngOnInit(): void {
    console.dir(this.customerContent);
  }

  ngOnDestroy(): void {
  }
}
