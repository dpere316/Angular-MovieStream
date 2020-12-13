import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './components/pages/about/about.component';
import {CardComponent} from './components/card/card.component';
import {CardDetailComponent} from './components/card-detail/card-detail.component';

const routes: Routes = [

  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'movies',
    component: CardComponent
  },
  {
    path: ':id',
    component: CardDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
