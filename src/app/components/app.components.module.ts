import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
} from '@angular/material';

import { ContainerComponent } from './container.component';
import { ContainerViewComponent } from './container-view.component';

@NgModule({
  declarations: [
    ContainerComponent,
    ContainerViewComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    ContainerComponent,
    ContainerViewComponent
  ]
})
export class AppComponentsModule { }
