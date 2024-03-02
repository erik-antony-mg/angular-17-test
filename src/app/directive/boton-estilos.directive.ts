import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBotonEstilos]',
  standalone: true
})
export class BotonEstilosDirective {

  constructor(private element:ElementRef) { }
  ngOnInit(): void {
    this.element.nativeElement.classList.add('p-1', 'bg-blue-500', 'border', 'rounded-lg', 'hover:bg-blue-700', 'text-2xl', 'ml-5', 'text-white');

  }
}
