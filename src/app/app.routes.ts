import { Routes } from '@angular/router';
import { SectionComponent } from './components/pages/section/section.component';
import { ProyectoComponent } from './components/pages/proyecto/proyecto.component';
import { ContactoComponent } from './components/pages/contacto/contacto.component';

export const routes: Routes = [
  {
    path:"",
    component:SectionComponent
  },
  {
    path:"proyectos",
    component:ProyectoComponent
  },
  {
    path:"contacto",
    component:ContactoComponent
  },
  {
    path:"**",
    redirectTo:"",
    pathMatch :"full"
  }
];
