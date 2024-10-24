import { Component, ViewContainerRef, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nevy11-top-settings',
  templateUrl: './top-settings.component.html',
  styleUrl: './top-settings.component.scss',
})
export class TopSettingsComponent {
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
