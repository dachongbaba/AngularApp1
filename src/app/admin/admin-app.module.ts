import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponentsModule } from '../components/app.components.module';
import { AdminAppRoutingModule } from './admin-app-routing.module';
import { AdminAppComponent } from './admin-app.component';
import { HomeComponent } from './views/home.component';
import { AboutComponent } from './views/about.component';
import { PageComponent } from './views/page.component';


@NgModule({
  declarations: [
    AdminAppComponent,
    HomeComponent,
    AboutComponent,
    PageComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppComponentsModule,
    AdminAppRoutingModule,
  ]
})
export class AdminAppModule { }
