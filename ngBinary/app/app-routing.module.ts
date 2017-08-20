import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch : 'full'
  },
  {
     path: 'home',
     component : HomeComponent
  },
  {
     path: 'about',
     component : AboutComponent
  },
  {
     path: 'detail',
     component : SearchDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
