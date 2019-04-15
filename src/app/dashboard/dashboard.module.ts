import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponentsModule } from '../components/app.components.module';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
} from '@angular/material';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './views/home.component';
import { AboutComponent } from './views/about.component';
import { PageComponent } from './views/page.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    PageComponent,
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
    AppComponentsModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
