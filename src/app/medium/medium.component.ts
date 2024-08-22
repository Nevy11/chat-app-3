import {
  Component,
  OnDestroy,
  OnInit,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { TabletDisplayComponent } from '../tablet-display/tablet-display.component';

@Component({
  selector: 'nevy11-medium',
  templateUrl: './medium.component.html',
  styleUrl: './medium.component.scss',
})
export class MediumComponent implements OnInit, OnDestroy {
  vcr = inject(ViewContainerRef);
  ngOnInit(): void {
    this.vcr.createComponent(TabletDisplayComponent);
  }
  ngOnDestroy(): void {
    this.vcr.remove(0);
  }
}
