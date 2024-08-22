import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[nevy11Btn]',
})
export class BtnDirective implements OnInit {
  @Input() bgColor: string = 'white';
  @Input() textColor: string = 'black';
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.bgColor
    );
    this.renderer.setStyle(this.element.nativeElement, 'color', this.textColor);
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.textColor
    );
    this.renderer.setStyle(this.element.nativeElement, 'color', this.bgColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.bgColor
    );
    this.renderer.setStyle(this.element.nativeElement, 'color', this.textColor);
  }
}
