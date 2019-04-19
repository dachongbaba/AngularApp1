import {Component, HostBinding, ViewChild } from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html'
})
export class PageViewComponent {
  @HostBinding('class') class = 'flex-grow-1 d-flex flex-column';
  @ViewChild('leftDrawer') leftDrawer: MatDrawer;
  @ViewChild('rightDrawer') rightDrawer: MatDrawer;

  toggleLeft() {
    this.leftDrawer.toggle();
  }

  toggleRight() {
    this.rightDrawer.toggle();
  }
}
