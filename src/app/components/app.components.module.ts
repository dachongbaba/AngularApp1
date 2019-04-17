import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    AppContainerLayoutComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AppComponentsModule {}
