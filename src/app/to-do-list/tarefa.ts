import { TarefaStatus } from "./tarefa-status";

export interface Tarefa {
  id: number;
  nome: string;
  status: TarefaStatus
}
