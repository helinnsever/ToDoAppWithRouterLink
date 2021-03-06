import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoDetailComponent } from './to-do-detail/to-do-detail.component';

import { ToDoComponent } from './to-do/to-do.component';
import { UserTodoComponent } from './user-todo/user-todo.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component: ToDoComponent},
  {path:"todos", component:ToDoComponent},
  {path:"users/:userId", component: UserTodoComponent },
  {path:"todos/:id", component: ToDoDetailComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
