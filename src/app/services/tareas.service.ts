import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() { }

  private localStorageKey ="listarTareas";

  getTareas(){
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];
    }
    return [];
  }
  agregarTarea(tarea:string){
    const tareas =this.getTareas();
    tareas.push(tarea)
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.localStorageKey,JSON.stringify(tareas));
    }
  }
  eliminarTarea(index:number){
    const tareas= this.getTareas();
    tareas.splice(index,1);
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.localStorageKey,JSON.stringify(tareas))
    }
  }
}
