import { Tarefa } from './tarefa';
import { Injectable } from '@angular/core';
import { TarefaStatus } from './tarefa-status';

@Injectable({
  providedIn: 'root'
})
export class DummyTasksService {

  constructor() { }

  dummyTasks: Tarefa[] = [
    {id: 1, nome: 'Fazer to-do list', status: TarefaStatus.EM_ANDAMENTO},
    {id: 2, nome: 'Comprar pão', status: TarefaStatus.CONCLUIDA},
    {id: 3, nome: 'Fazer café', status: TarefaStatus.NA_LIXEIRA},
    {id: 4, nome: 'Lavar roupa', status: TarefaStatus.EM_ANDAMENTO},
    {id: 5, nome: 'Lavar pratos', status: TarefaStatus.CONCLUIDA},
    {id: 6, nome: 'Varrer a casa', status: TarefaStatus.EM_ANDAMENTO},
  ]

  getAllDummytasks(): Tarefa[]{
    return this.dummyTasks
  }
}
