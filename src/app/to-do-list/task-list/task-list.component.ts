import { TaskListService } from './../task-list.service';
import { DummyTasksService } from './../dummy-tasks.service';
import { Tarefa } from './../tarefa';
import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { TarefaStatus } from '../tarefa-status';
import { filter } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private taskListService: TaskListService) { }

  @ViewChild('formTask') formTask!: ElementRef;

  todasTasks: Tarefa[] = []
  tasksFiltradas: Tarefa[] = this.todasTasks

  changeStatusTask(taskCocluida: Tarefa){
    this.taskListService.changeTaskStatus(taskCocluida)
    this.atualizarTasksFiltradas()
  }

  adicionarTask(event: any){
    event?.preventDefault()
    if(event.target[0].value != ''){
      this.todasTasks = this.taskListService.addTask(event)
      this.formTask.nativeElement.reset()
      this.atualizarTasksFiltradas()
    }
  }

  removerTask(event: any){
    this.todasTasks = this.taskListService.removeTask(event)
    this.atualizarTasksFiltradas()
    console.log('task na lixeira', event)
  }

  atualizarTasksFiltradas(){
    this.tasksFiltradas = this.todasTasks.filter(
      task => task.status !== TarefaStatus.NA_LIXEIRA
    )
  }

  ngOnInit(): void {
    this.todasTasks = this.taskListService.getAllTasks()
    this.atualizarTasksFiltradas()
  }

}
