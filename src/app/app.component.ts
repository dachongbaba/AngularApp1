<<<<<<< HEAD
import { Component, HostBinding, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
=======
import {Component, HostBinding, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
>>>>>>> 6d7083b4252ca22ca6bc45ad23964a3e9f8e93da

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
