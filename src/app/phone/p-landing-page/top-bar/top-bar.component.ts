import { Component } from '@angular/core';

@Component({
  selector: 'nevy11-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  show_settings = true;
  change() {
    this.show_settings = !this.show_settings;
  }
}
