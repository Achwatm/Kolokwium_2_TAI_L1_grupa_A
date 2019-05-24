import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MaBlogItemComponent} from './components/ma-blog-item/ma-blog-item.component';

const routes: Routes = [
  {
  path: 'blog/post/:id',
  component: MaBlogItemComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
