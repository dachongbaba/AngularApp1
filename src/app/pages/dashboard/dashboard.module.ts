<<<<<<< HEAD:src/app/pages/dashboard/dashboard.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './views/home.component';
import { AboutComponent } from './views/about.component';
import { PageComponent } from './views/page.component';
import { MasterDetailComponent } from './views/master-detail.component';
=======
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../components/components.module';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {HomeComponent} from './views/home.component';
import {AboutComponent} from './views/about.component';
import {PageComponent} from './views/page.component';
import {MasterDetailComponent} from './views/master-detail.component';
>>>>>>> 6d7083b4252ca22ca6bc45ad23964a3e9f8e93da:src/app/dashboard/dashboard.module.ts


@NgModule({
  declarations: [
    DashboardComponent,
    MasterDetailComponent,
    HomeComponent,
    AboutComponent,
    PageComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule {
}
