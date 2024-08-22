import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[nevy11Clearfix]',
})
export class ClearfixDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'overflow', 'hidden');
  }
}
