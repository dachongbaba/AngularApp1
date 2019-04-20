import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnDestroy {
  open = false;
  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 1024px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}
