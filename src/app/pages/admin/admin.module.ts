import { NgModule } from '@angular/core';
import { CommonModule } from '_@angular_common@7.2.13@@angular/common';
import { ComponentsModule } from '../../components/components.module';
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
    ComponentsModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
