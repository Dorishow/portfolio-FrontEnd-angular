import { TarefaStatus } from './tarefa-status';
import { Tarefa } from './tarefa';
import { DummyTasksService } from './dummy-tasks.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  constructor(private dummyTasksService: DummyTasksService) { }

  allTasks: Tarefa[] = []

  addTask(event: any){
    this.allTasks = [...this.getAllTasks(),
      {id: this.getAllTasks().length, nome: event.target[0].value, status: TarefaStatus.EM_ANDAMENTO}
    ]
    this.setToLocalStorage(this.allTasks)
    return this.allTasks
  }

  removeTask(event: any){
    return this.updateTask(event, TarefaStatus.NA_LIXEIRA)
  }

  changeTaskStatus(event: any){
    const newTaskList = this.getAllTasks()
    const [taskToUpdate] = newTaskList.filter(task => task.id == event.id)
    taskToUpdate.status == 1? this.updateTask(event, TarefaStatus.EM_ANDAMENTO) : this.updateTask(event, TarefaStatus.CONCLUIDA)
  }

  updateTask(event: any, status: TarefaStatus){
    const newTaskList = this.getAllTasks()
    const [taskToDelete] = newTaskList.filter(task => task.id == event.id)
    newTaskList[ newTaskList.indexOf(taskToDelete) ].status = status
    this.setToLocalStorage(newTaskList)
    return this.getAllTasks()
  }

  setToLocalStorage(tasks: Tarefa[]){
    localStorage.setItem('to-do-list', JSON.stringify(tasks))
  }

  getAllTasks(): Tarefa[]{
    const tasklist = (localStorage.getItem('to-do-list') ?? '[]')
    return JSON.parse(tasklist)
  }
}
