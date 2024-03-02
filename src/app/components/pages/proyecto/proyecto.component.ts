import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProyectoComponent {
  activo:boolean=true;

  botonActivo(){
    this.activo=!this.activo;
  }
}
