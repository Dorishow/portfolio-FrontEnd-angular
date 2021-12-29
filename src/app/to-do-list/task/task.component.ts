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

  textDecoration: string = ''

  EmitChangeStatusTask(){
    this.changeStatusTask.emit(this.task)
    this.changTaskStatus()
  }

  changTaskStatus(){
    if(this.task.status === TarefaStatus.CONCLUIDA){
      this.task.status = TarefaStatus.EM_ANDAMENTO
      this.textDecoration = ''
      console.log(' task concluída desmarcada ',this.task)
    }
    else{
      this.task.status = TarefaStatus.CONCLUIDA
      this.textDecoration = 'line-through'
      console.log(' task concluída ',this.task)
    }
  }

  EmitExcluirTask(){
    this.excluirTask.emit(this.task)
  }

  ngOnInit(): void {
    this.textDecoration = this.task.status === TarefaStatus.CONCLUIDA? 'line-through' : ''
  }

}
