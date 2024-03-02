import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Usuarios } from '../../../tools/Usuario';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactoComponent  {
  usuario: Usuarios = {
    "nombre": '',
    "email": '',
  };
  formularioReactivo!: FormGroup;
  constructor(private form: FormBuilder) {
     this.formularioReactivo = this.form.group({
      nombre: ["", [Validators.required]],
      email: ["", [Validators.email, Validators.required]],
    });
  }

  // ngOnInit(): void {



  // }

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
    if (this.usuario?.nombre == '' ||this.usuario?.nombre == null) {
      alert("Por favor ingrese el nombre del contacto");
      return ;
    }
    if (this.usuario?.email == '' ||this.usuario?.email == null) {
      alert("Por favor ingrese el email del contacto");
      return ;
    }
    if (!/\S+@\S+\.\S+/.test(this.usuario.email)) {
      alert("Por favor ingrese un email válido que contenga  @ y . ");
      return;
    }
    console.log(this.usuario);
  }

  cambio() {
    this.plantilla = !this.plantilla;
  }
}
