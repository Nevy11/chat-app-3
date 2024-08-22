import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[nevy11Center]',
})
export class CenterDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'textAlign', 'center');
  }
}
