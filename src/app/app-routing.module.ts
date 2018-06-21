import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './home/page-home/page-home.component';
import { PageAboutComponent } from './about/page-about/page-about.component';
import { AppComponent } from './app.component';
import { PageContactComponent } from './contact/page-contact/page-contact.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: PageHomeComponent
  },
  {
    path: 'about',
    component: PageAboutComponent
  },
  {
    path: 'contact',
    component: PageContactComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
