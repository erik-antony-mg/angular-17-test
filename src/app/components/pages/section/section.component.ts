import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContadorServiceService } from '../../../services/contador-service.service';
import { BotonEstilosDirective } from '../../../directive/boton-estilos.directive';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MiPipePipe } from '../../../pipes/mi-pipe.pipe';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [FormsModule,BotonEstilosDirective,CurrencyPipe,MiPipePipe,DatePipe],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionComponent {

  constructor(private _servicioContador: ContadorServiceService) {}
  private _servicioContador2=inject(ContadorServiceService)

  precio:number=8.489;
  contador: number = 0;
  texto: string = 'soy erik';
  fecha: Date = new Date();

  incrementar() {
    this.contador = this._servicioContador.aumentar(this.contador);
  }
  decrementar() {
    this.contador = this._servicioContador.decrementar(this.contador);
  }
  reset() {
    this.contador = this._servicioContador.resetear(this.contador);
  }

  // @Input() contador!:number;
  // @Output() mensajaDelHijo =new EventEmitter<string>();

  // mensajeInput="";

  // enviarMensaje(){
  //   this.mensajaDelHijo.emit(this.mensajeInput);
  // }

  // incrementar(){
  //   this.contador++;

  // };
  // decrementar(){
  //   this.contador--;
  // };
  // reset(){
  //   this.contador=0;
  // };
}
