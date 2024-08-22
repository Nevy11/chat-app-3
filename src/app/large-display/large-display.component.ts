import {
  Component,
  OnDestroy,
  OnInit,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { LargeComponent } from './large/large.component';

@Component({
  selector: 'nevy11-large-display',
  templateUrl: './large-display.component.html',
  styleUrl: './large-display.component.scss',
})
export class LargeDisplayComponent implements OnInit, OnDestroy {
  vcr = inject(ViewContainerRef);
  ngOnInit(): void {
    this.vcr.createComponent(LargeComponent);
  }
  ngOnDestroy(): void {
    this.vcr.remove(0);
  }
}
