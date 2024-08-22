import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[nevy11Py]',
})
export class PyDirective implements OnInit {
  @Input() py: number = 1;
  constructor(private renderer: Renderer2, private element: ElementRef) {}
  ngOnInit(): void {
    if (this.py === 1) {
      this.renderer.setStyle(this.element.nativeElement, 'marginTop', '.25rem');
      this.renderer.setStyle(
        this.element.nativeElement,
        'marginBottom',
        '.25rem'
      );
    }
    if (this.py === 2) {
      this.renderer.setStyle(this.element.nativeElement, 'marginTop', '.5rem');
      this.renderer.setStyle(
        this.element.nativeElement,
        'marginBottom',
        '.5rem'
      );
    }
    if (this.py === 3) {
      this.renderer.setStyle(this.element.nativeElement, 'marginTop', '1rem');
      this.renderer.setStyle(
        this.element.nativeElement,
        'marginBottom',
        '1rem'
      );
    }
    if (this.py === 4) {
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
    if (this.py === 5) {
      this.renderer.setStyle(this.element.nativeElement, 'marginTop', '1.5rem');
      this.renderer.setStyle(
        this.element.nativeElement,
        'marginBottom',
        '1.5rem'
      );
    }
  }
}
