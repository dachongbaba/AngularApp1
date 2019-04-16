import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-container-view',
  templateUrl: './app-container-view.component.html',
  styleUrls: ['./app-container-view.component.css']
})
export class AppContainerViewComponent implements OnDestroy {
  open = false;
  page = 0;
  mobileQuery: MediaQueryList;
  smallQuery: MediaQueryList;
  mediumQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this.smallQuery = media.matchMedia('(max-width: 1024px)');
    this.mediumQuery = media.matchMedia('(max-width: 1360px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  prevPage(): void {
    this.page -= 1;
  }

  nextPage(): void {
    this.page += 1;
  }
}
