import { Component } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'lib-mat-app-container',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
})
export class MatAppContainerComponent {

  mobileQuery: MediaQueryList;

  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }
}

