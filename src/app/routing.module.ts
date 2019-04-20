import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
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
