import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialModule} from './material.module';

import {PageViewComponent} from './page-view.component';
import {PageLayoutComponent} from './page-layout.component';


@NgModule({
  declarations: [
    PageViewComponent,
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    PageViewComponent,
    PageLayoutComponent,
    MaterialModule
  ]
})
export class ComponentsModule {
}
