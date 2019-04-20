import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-navside',
  template: `
    <mat-nav-list>
      <a mat-list-item routerLink="/dashboard">Dashboard</a>
      <a mat-list-item routerLink="/admin">Admin</a>
    </mat-nav-list>
  `
})
export class NavSideComponent {

  @HostBinding('class') class = 'd-flex flex-column';

  @HostBinding('style.width') width = '256px';
}
