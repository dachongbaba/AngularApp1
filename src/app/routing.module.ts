<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
=======
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home.component';
>>>>>>> 6d7083b4252ca22ca6bc45ad23964a3e9f8e93da

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'admin',
    loadChildren: './pages/admin/admin.module#AdminModule'
  },
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: '',
  //   redirectTo: '/dashboard',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
