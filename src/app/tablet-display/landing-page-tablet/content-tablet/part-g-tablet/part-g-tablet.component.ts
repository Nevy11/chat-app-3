import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  inject,
} from '@angular/core';

@Component({
  selector: 'nevy11-part-g-tablet',
  templateUrl: './part-g-tablet.component.html',
  styleUrl: './part-g-tablet.component.scss',
})
export class PartGTabletComponent implements OnInit {
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