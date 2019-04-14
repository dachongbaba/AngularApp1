import { TestBed, async } from '@angular/core/testing';
import { MatAppContainerComponent } from './component';

describe('MdcAppContainerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MatAppContainerComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MatAppContainerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularApp1'`, () => {
    const fixture = TestBed.createComponent(MatAppContainerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('AngularApp1');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(MatAppContainerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to AngularApp1!');
  });
});
