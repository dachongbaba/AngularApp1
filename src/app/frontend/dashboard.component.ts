import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { AppContainerComponent } from '../components/app-container.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @ViewChild('appContainer') appContainer: AppContainerComponent;

  toggleLeft() {
    this.appContainer.toggleLeft();
  }

  toggleRight() {
    this.appContainer.toggleRight();
  }
}
