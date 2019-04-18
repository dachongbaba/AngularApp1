import { Component, ViewChild } from '@angular/core';
import { AppContainerComponent } from './components/app-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  @ViewChild('appContainer') appContainer: AppContainerComponent;

  toggleLeft() {
    this.appContainer.toggleLeft();
  }

  toggleRight() {
    this.appContainer.toggleRight();
  }
}
