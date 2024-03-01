import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SectionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  mensaje:string="";

  obtenerMensaje($event:string){
    this.mensaje=$event;
  }
}
