import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatListModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';

import { AppContainerComponent } from './app-container.component';
import { AppContainerViewComponent } from './app-container-view.component';
import { AppContainerLayoutComponent } from './app-container-layout.component';
@NgModule({
  declarations: [
    AppContainerComponent,
    AppContainerViewComponent,
    AppContainerLayoutComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    AppContainerComponent,
    AppContainerViewComponent,
    AppContainerLayoutComponent
  ]
})
export class AppComponentsModule {}
