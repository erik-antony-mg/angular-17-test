import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContadorServiceService {
  constructor() {}
  aumentar(numero: number): number {
    return ++numero;
  }
  decrementar(numero: number): number {
    return --numero;
  }
  resetear(numero: number): number {
    return (numero = 0);
  }
}
