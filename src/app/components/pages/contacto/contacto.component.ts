import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Usuarios } from '../../../tools/Usuario';


@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactoComponent implements OnInit {
  usuario: Usuarios = {
    nombre: '',
    email: '',
  };
  formularioReactivo!: FormGroup;
  constructor(private form: FormBuilder) {}

  ngOnInit(): void {
    this.formularioReactivo = this.form.group({
      nombre: ["", [Validators.required]],
      email: ["", [Validators.email, Validators.required]],
    });
  }

  controlErrores(campo: string, error: string): boolean {
    return (
      this.formularioReactivo!.controls[campo].hasError(error) &&
      this.formularioReactivo!.controls[campo].touched
    );
  }

  enviarFormularioReactivo() {
    if (this.formularioReactivo!.invalid) {
      this.formularioReactivo!.markAllAsTouched();
      return;
    }
    this.usuario = this.formularioReactivo.value;
    console.log(this.usuario);
  }


  plantilla: boolean = true;
  enviarFormularioPlantilla() {
    console.log(this.usuario);
  }

  cambio() {
    this.plantilla = !this.plantilla;
  }
}
