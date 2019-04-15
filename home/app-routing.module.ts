import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home.component';
import { AboutComponent } from './views/about.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: AppComponent,
    data: { title: 'DashBoard App' }
  },
  {
    path: 'dashboard/home',
    component: HomeComponent,
    data: { title: 'DashBoard Home' }
  },
  {
    path: 'dashboard/About',
    component: AboutComponent,
    data: { title: 'DashBoard About' }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
