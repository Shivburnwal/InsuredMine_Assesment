import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { GalleryComponent } from './Pages/gallery/gallery.component';
import { HomeComponent } from './Pages/home/home.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { LoginComponent } from './Pages/login/login.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:  '',
    component:  LayoutComponent,
    children: [
    {
    path:  '',
    component:  HomeComponent
    },
    {
      path:  'about',
      component:  AboutComponent
    },
    {
      path:  'gallery',
      component:  GalleryComponent
    },
    {
      path:  'login',
      component:  LoginComponent
    },
    {
      path:  'home',
      component:  HomeComponent
    },
    {
      path:  'dashboard',
      component:  DashboardComponent
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
