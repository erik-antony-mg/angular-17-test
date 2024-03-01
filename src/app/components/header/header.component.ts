import { Component,ChangeDetectionStrategy  } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

   lista:string[] = ["inicio","sobre", "proyectos", "contact","gmail"];
}
