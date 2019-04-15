import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home.component';
import { AboutComponent } from './views/about.component';

@NgModule({
  declarations: [
    DashboardModule,
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    DashboardRoutingModule
  ],
  exports: [
    AppComponent
  ]
})
export class DashboardModule { }
