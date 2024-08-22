import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[nevy11H]',
})
export class HDirective implements OnInit {
  @Input() header = 'h1';
  constructor(private renderer: Renderer2, private element: ElementRef) {}
  ngOnInit(): void {
    if (this.header === 'h1') {
      this.renderer.setStyle(
        this.element.nativeElement,
        'fontSize',
        'calc(1.375rem + 1.5vw)'
      );
    }
    if (this.header === 'h2') {
      this.renderer.setStyle(
        this.element.nativeElement,
        'fontSize',
        'calc(1.325rem + .9vw)'
      );
    }
    if (this.header === 'h3') {
      this.renderer.setStyle(
        this.element.nativeElement,
        'fontSize',
        'calc(1.3rem + 0.6vw)'
      );
    }
    if (this.header === 'h4') {
      this.renderer.setStyle(
        this.element.nativeElement,
        'fontSize',
        'calc(1.275rem + 0.3vw)'
      );
    }
    if (this.header === 'h5') {
      this.renderer.setStyle(
        this.element.nativeElement,
        'fontSize',
        'calc(1.275rem + 0.3vw)'
      );
    }
  }
}
