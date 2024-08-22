import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[nevy11BgColor]',
})
export class BgColorDirective implements OnInit {
  @Input() text_color: string = 'white';
  @Input() bg_color: string = 'black';
  constructor(private renderer: Renderer2, private element: ElementRef) {}
  ngOnInit(): void {
    if (this.bg_color === 'black' || this.bg_color === 'dark') {
      this.renderer.setStyle(this.element.nativeElement, 'BsBgOpacity', '1');

      this.renderer.setStyle(
        this.element.nativeElement,
        'backgroundColor',
        this.bg_color
      );
      this.renderer.setStyle(
        this.element.nativeElement,
        'color',
        this.text_color
      );
    }
    if (this.bg_color === 'blue' || this.bg_color === 'primary') {
      this.renderer.setStyle(this.element.nativeElement, 'BsBgOpacity', '1');

      this.renderer.setStyle(
        this.element.nativeElement,
        'backgroundColor',
        'rgba(13, 110, 253, 1)'
      );
      this.renderer.setStyle(
        this.element.nativeElement,
        'color',
        this.text_color
      );
    }
    if (this.bg_color === 'red' || this.bg_color === 'danger') {
      this.renderer.setStyle(this.element.nativeElement, 'BsBgOpacity', '1');

      this.renderer.setStyle(
        this.element.nativeElement,
        'backgroundColor',
        'rgba(220, 53, 69, 1)'
      );
      this.renderer.setStyle(
        this.element.nativeElement,
        'color',
        this.text_color
      );
    }

    if (this.bg_color === 'yellow' || this.bg_color === 'warning') {
      this.renderer.setStyle(this.element.nativeElement, 'BsBgOpacity', '1');

      this.renderer.setStyle(
        this.element.nativeElement,
        'backgroundColor',
        'rgba(255, 193, 7, 1)'
      );
      this.renderer.setStyle(
        this.element.nativeElement,
        'color',
        this.text_color
      );
    }

    if (this.bg_color === 'green' || this.bg_color === 'success') {
      this.renderer.setStyle(this.element.nativeElement, 'BsBgOpacity', '1');

      this.renderer.setStyle(
        this.element.nativeElement,
        'backgroundColor',
        'rgba(25, 135, 84, 1)'
      );
      this.renderer.setStyle(
        this.element.nativeElement,
        'color',
        this.text_color
      );
    }

    if (this.bg_color === 'purple') {
      this.renderer.setStyle(this.element.nativeElement, 'BsBgOpacity', '1');

      this.renderer.setStyle(
        this.element.nativeElement,
        'backgroundColor',
        'rgba(226, 216, 255, 1)'
      );
      this.renderer.setStyle(
        this.element.nativeElement,
        'color',
        this.text_color
      );
    }
  }
}
