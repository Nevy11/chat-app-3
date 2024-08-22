import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'nevy11-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  vcr = inject(ViewContainerRef);
  breakpointObserver = inject(BreakpointObserver);
  isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => {
      if (result.matches) {
        return true;
      }
      return false;
    })
  );
  isMedium$ = this.breakpointObserver.observe(Breakpoints.Tablet).pipe(
    map((x) => {
      if (x.matches) {
        return true;
      }
      return false;
    })
  );

  isLarge$ = this.breakpointObserver.observe(Breakpoints.XLarge).pipe(
    map((x) => {
      if (x.matches) {
        return true;
      }
      return false;
    })
  );
  isLargeBrave$ = this.breakpointObserver.observe(Breakpoints.Large).pipe(
    map((x) => {
      if (x.matches) {
        return true;
      } else {
        return false;
      }
    })
  );
}
