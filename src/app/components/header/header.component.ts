import { CommonModule } from '@angular/common';
import { Component,ChangeDetectionStrategy  } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
   enlaces:string[] = ["inicio", "proyectos", "contacto"];
   urls:string[]=["","proyectos","contacto"];
}
