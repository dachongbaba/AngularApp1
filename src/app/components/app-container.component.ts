import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent {
  mediaQueryList: MediaQueryList;

  constructor(mediaMatcher: MediaMatcher) {
    this.mediaQueryList = mediaMatcher.matchMedia('(min-width: 768)');
  }
}
