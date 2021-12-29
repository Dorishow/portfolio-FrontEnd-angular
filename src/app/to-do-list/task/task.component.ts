import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarefa } from '../tarefa';
import { TarefaStatus } from '../tarefa-status';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  @Input() task: Tarefa = {id: -1, nome: '', status: TarefaStatus.EM_ANDAMENTO}
  @Output() changeStatusTask = new EventEmitter()
  @Output() excluirTask = new EventEmitter()

  EmitChangeStatusTask(){
    this.changeStatusTask.emit(this.task)
  }

  EmitExcluirTask(){
    this.excluirTask.emit(this.task)
  }

  ngOnInit(): void {
  }

}
