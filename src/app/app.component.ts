import {Component, HostBinding, ViewChild} from '@angular/core';
import { AppContainerComponent } from './components/app-container.component';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostBinding('class') class = 'd-flex flex-column scroll vh-100';
  @ViewChild('topAppbar') topAppbar: MatToolbar;
  @ViewChild('leftSide') leftSide: MatSidenav;
  @ViewChild('rightSide') rightSide: MatSidenav;

  toggleLeft() {
    this.leftSide.toggle();
  }

  toggleRight() {
    this.rightSide.toggle();
  }
}
