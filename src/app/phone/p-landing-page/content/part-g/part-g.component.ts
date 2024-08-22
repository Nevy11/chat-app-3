import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  inject,
} from '@angular/core';

@Component({
  selector: 'nevy11-part-g',
  templateUrl: './part-g.component.html',
  styleUrl: './part-g.component.scss',
})
export class PartGComponent {
  @ViewChild('tomorrow', { static: true }) tomorrow!: ElementRef;
  @ViewChild('main', { static: true }) main!: ElementRef;
  renderer = inject(Renderer2);
  ngOnInit(): void {
    this.renderer.setStyle(this.tomorrow.nativeElement, 'margin-top', '5rem');
    this.renderer.setStyle(
      this.tomorrow.nativeElement,
      'margin-bottom',
      '5rem'
    );
    this.renderer.setStyle(this.main.nativeElement, 'margin-top', '3rem');
    this.renderer.setStyle(this.main.nativeElement, 'margin-bottom', '3rem');
  }
}
