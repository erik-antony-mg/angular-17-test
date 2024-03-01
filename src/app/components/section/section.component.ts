import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionComponent {

  @Input() contador!:number;
  @Output() mensajaDelHijo =new EventEmitter<string>();

  mensajeInput="";

  enviarMensaje(){
    this.mensajaDelHijo.emit(this.mensajeInput);
  }

  incrementar(){
    this.contador++;

  };
  decrementar(){
    this.contador--;
  };
  reset(){
    this.contador=0;
  };
}
