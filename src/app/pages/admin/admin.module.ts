<<<<<<< HEAD:src/app/pages/admin/admin.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './views/home.component';
import { AboutComponent } from './views/about.component';
import { PageComponent } from './views/page.component';
=======
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../components/components.module';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {HomeComponent} from './views/home.component';
import {AboutComponent} from './views/about.component';
import {PageComponent} from './views/page.component';
>>>>>>> 6d7083b4252ca22ca6bc45ad23964a3e9f8e93da:src/app/admin/admin.module.ts


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
export class AdminModule {
}
