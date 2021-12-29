import { TaskListComponent } from './to-do-list/task-list/task-list.component';
// import { TaskComponent } from './to-do-list/task/task.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'to-do-list', component:TaskListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
