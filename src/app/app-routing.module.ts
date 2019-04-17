import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {
  //    path: 'dashboard',
  //    loadChildren: './dashboard/dashboard.module#DashboardModule'
  // },
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: true
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
