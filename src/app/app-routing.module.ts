import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './frontend/dashboard.module#DashboardModule'
  },
  {
    path: 'admin',
    loadChildren: './backend/admin.module#AdminModule'
  },
  {
    path: '',
    redirectTo: '/dashboard',
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
