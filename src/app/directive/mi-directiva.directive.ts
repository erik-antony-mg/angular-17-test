import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva]',
  standalone: true
})
export class MiDirectivaDirective implements OnInit {

  constructor(private element:ElementRef) { }
  ngOnInit(): void {
    this.element.nativeElement.classList.add('p-1', 'bg-blue-500', 'border', 'rounded-lg', 'hover:bg-blue-700', 'text-2xl', 'ml-5', 'text-white');

  }

}
