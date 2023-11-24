import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { AddUpdateBlogComponent } from './components/add-update-blog/add-update-blog.component';

const routes: Routes = [
  { path: '', redirectTo: '/blogs', pathMatch: 'full' },
  { path: 'blogs', component: BlogListComponent },
  { path: 'add', component: AddUpdateBlogComponent },
  { path: 'edit/:id', component: AddUpdateBlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
