import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[nevy11Mx]',
})
export class MxDirective implements OnInit {
  @Input() mx: number = 1;
  constructor(private renderer: Renderer2, private element: ElementRef) {}
  ngOnInit(): void {
    if (this.mx === 1) {
      this.renderer.setStyle(
        this.element.nativeElement,
        'marginRight',
        '.25rem'
      );
      this.renderer.setStyle(
        this.element.nativeElement,
        'marginLeft',
        '.25rem'
      );
    }
    if (this.mx === 2) {
      this.renderer.setStyle(
        this.element.nativeElement,
        'marginRight',
        '.5rem'
      );
      this.renderer.setStyle(this.element.nativeElement, 'marginLeft', '.5rem');
    }
    if (this.mx === 3) {
      this.renderer.setStyle(this.element.nativeElement, 'marginRight', '1rem');
      this.renderer.setStyle(this.element.nativeElement, 'marginLeft', '1rem');
    }
    if (this.mx === 4) {
      this.renderer.setStyle(
        this.element.nativeElement,
        'marginRight',
        '1.25rem'
      );
      this.renderer.setStyle(
        this.element.nativeElement,
        'marginLeft',
        '1.25rem'
      );
    }
    if (this.mx === 5) {
      this.renderer.setStyle(
        this.element.nativeElement,
        'marginRight',
        '1.5rem'
      );
      this.renderer.setStyle(
        this.element.nativeElement,
        'marginLeft',
        '1.5rem'
      );
    }
  }
}
