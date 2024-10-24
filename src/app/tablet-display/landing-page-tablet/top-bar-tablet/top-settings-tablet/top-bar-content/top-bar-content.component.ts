import { Component } from '@angular/core';

@Component({
  selector: 'nevy11-top-bar-content',
  templateUrl: './top-bar-content.component.html',
  styleUrl: './top-bar-content.component.scss',
})
export class TopBarContentComponent {
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
