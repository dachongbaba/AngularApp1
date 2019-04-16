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

import { ContainerComponent } from './app-container.component';
import { ContainerViewComponent } from './app-container-view.component';

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
