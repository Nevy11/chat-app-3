import { Component } from '@angular/core';

@Component({
  selector: 'nevy11-top-bar-tablet',
  templateUrl: './top-bar-tablet.component.html',
  styleUrl: './top-bar-tablet.component.scss',
})
export class TopBarTabletComponent {
  show_settings = true;
  change() {
    this.show_settings = !this.show_settings;
  }
}
