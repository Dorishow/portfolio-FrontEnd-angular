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

  constructor(private dummyTasksService: DummyTasksService) { }

  @ViewChild('formTask') formTask!: ElementRef;

  todasTasks: Tarefa[] = []
  tasksFiltradas: Tarefa[] = this.todasTasks

  changeStatusTask(taskCocluida: Tarefa){
    // this.todasTasks[ this.todasTasks.indexOf(taskCocluida) ].status = TarefaStatus.CONCLUIDA
    this.atualizarTasksFiltradas()
  }

  adicionarTask(event: any){
    event?.preventDefault()
    this.todasTasks = [...this.todasTasks,
    {id: this.todasTasks.length, nome: event.target[0].value, status: TarefaStatus.EM_ANDAMENTO}
    ]
    this.formTask.nativeElement.reset()
    this.atualizarTasksFiltradas()
  }

  removerTask(event: any){
    this.todasTasks[ this.todasTasks.indexOf(event) ].status = TarefaStatus.NA_LIXEIRA
    this.atualizarTasksFiltradas()
    console.log('task na lixeira', event)
  }

  atualizarTasksFiltradas(){
    this.tasksFiltradas = this.todasTasks.filter(
      task => task.status !== TarefaStatus.NA_LIXEIRA
    )
  }

  ngOnInit(): void {
    this.todasTasks = this.dummyTasksService.getAllDummytasks()
    this.atualizarTasksFiltradas()
  }

}
