import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../components/components.module';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {HomeComponent} from './views/home.component';
import {AboutComponent} from './views/about.component';
import {PageComponent} from './views/page.component';
import {MasterDetailComponent} from './views/master-detail.component';


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
