import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponentsModule } from '../components/app.components.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './views/home.component';
import { AboutComponent } from './views/about.component';
import { PageComponent } from './views/page.component';


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    AboutComponent,
    PageComponent,
  ],
  imports: [
    CommonModule,
    AppComponentsModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
