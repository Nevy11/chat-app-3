import {
  AfterViewInit,
  Component,
  ContentChild,
  OnDestroy,
  OnInit,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { PhoneComponent } from '../phone/phone.component';
import { Router } from '@angular/router';

@Component({
  selector: 'nevy11-phone-display',
  templateUrl: './phone-display.component.html',
  styleUrl: './phone-display.component.scss',
})
export class PhoneDisplayComponent implements AfterViewInit, OnDestroy {
  vcr = inject(ViewContainerRef);
  router = inject(Router);
  ngAfterViewInit(): void {
    this.vcr.createComponent(PhoneComponent);
  }

  ngOnDestroy(): void {
    if (PhoneComponent) {
      this.vcr.remove(0);
    }
  }
}
