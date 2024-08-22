import { Component } from '@angular/core';

@Component({
  selector: 'nevy11-top-bar-large',
  templateUrl: './top-bar-large.component.html',
  styleUrl: './top-bar-large.component.scss',
})
export class TopBarLargeComponent {
  show_settings = true;
  change() {
    this.show_settings = !this.show_settings;
  }
}
