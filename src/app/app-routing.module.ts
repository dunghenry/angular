import { TodoComponent } from './todo/todo.component';
import { PostComponent } from './post/post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: 'helloworld',
    component: HelloworldComponent,
  },
  {
    path: 'post',
    component: PostComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
