import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent as DashBoardAppComponent } from '../dashboard/app.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashBoardAppComponent,
    data: { title: 'DashBoard App' }
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
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
