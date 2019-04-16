import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard-page1',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnDestroy {
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