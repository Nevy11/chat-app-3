import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[nevy11Container]',
})
export class ContainerDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'width', '100%');
    this.renderer.setStyle(
      this.element.nativeElement,
      'paddingRight',
      '7.5rem'
    );
    this.renderer.setStyle(this.element.nativeElement, 'paddingLeft', '7.5rem');
    this.renderer.setStyle(this.element.nativeElement, 'marginRight', 'auto');
    this.renderer.setStyle(this.element.nativeElement, 'marginLeft', 'auto');
    this.renderer.setStyle(this.element.nativeElement, 'display', 'block');
    this.renderer.setStyle(
      this.element.nativeElement,
      'unicodeBidi',
      'isolate'
    );
  }
}
