import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[nevy11Col]',
})
export class ColDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'flex', '1 0 0%');
    this.renderer.setStyle(this.element.nativeElement, 'flex-grow', '1');
    this.renderer.setStyle(this.element.nativeElement, 'flex-shrink', '0');
    this.renderer.setStyle(this.element.nativeElement, 'flex-basis', '0%');
  }
}
