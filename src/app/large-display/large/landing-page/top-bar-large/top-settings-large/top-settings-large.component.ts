import { Component } from '@angular/core';

@Component({
  selector: 'nevy11-top-settings-large',
  templateUrl: './top-settings-large.component.html',
  styleUrl: './top-settings-large.component.scss',
})
export class TopSettingsLargeComponent {
  items = ['login', 'sign up', 'Official Website', 'Library', 'Help Center'];
  items_index = [
    'tablet/login',
    'tablet/sign up',
    'tablet/Official Website',
    'tablet/Library',
    'tablet/Help Center',
  ];
  expandedIndex = 0;
}
