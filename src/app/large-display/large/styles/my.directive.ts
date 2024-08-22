import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[nevy11My]',
})
export class MyDirective implements OnInit {
  @Input() my: number = 1;
  constructor(private renderer: Renderer2, private element: ElementRef) {}
  ngOnInit(): void {
    if (this.my === 1) {
      this.renderer.setStyle(this.element.nativeElement, 'marginTop', '.25rem');
      this.renderer.setStyle(
        this.element.nativeElement,
        'marginBottom',
        '.25rem'
      );
    }
    if (this.my === 2) {
      this.renderer.setStyle(this.element.nativeElement, 'marginTop', '.5rem');
      this.renderer.setStyle(
        this.element.nativeElement,
        'marginBottom',
        '.5rem'
      );
    }
    if (this.my === 3) {
      this.renderer.setStyle(this.element.nativeElement, 'marginTop', '1rem');
      this.renderer.setStyle(
        this.element.nativeElement,
        'marginBottom',
        '1rem'
      );
    }
    if (this.my === 4) {
      this.renderer.setStyle(
        this.element.nativeElement,
        'marginTop',
        '1.25rem'
      );
      this.renderer.setStyle(
        this.element.nativeElement,
        'marginBottom',
        '1.25rem'
      );
    }
    if (this.my === 5) {
      this.renderer.setStyle(this.element.nativeElement, 'marginTop', '1.5rem');
      this.renderer.setStyle(
        this.element.nativeElement,
        'marginBottom',
        '1.5rem'
      );
    }
  }
}
