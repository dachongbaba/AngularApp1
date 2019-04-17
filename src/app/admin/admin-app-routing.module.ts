import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAppComponent } from './admin-app.component';
import { HomeComponent } from './views/home.component';
import { AboutComponent } from './views/about.component';
import { PageComponent } from './views/page.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminAppComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'page',
        component: PageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminAppRoutingModule { }
