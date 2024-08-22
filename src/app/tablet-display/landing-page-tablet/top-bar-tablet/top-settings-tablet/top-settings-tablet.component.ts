import { Component, ViewContainerRef, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nevy11-top-settings-tablet',
  templateUrl: './top-settings-tablet.component.html',
  styleUrl: './top-settings-tablet.component.scss',
})
export class TopSettingsTabletComponent {
  items = ['login', 'sign up', 'Official Website', 'Library', 'Help Center'];
  content = ['login', 'signUp', 'official', 'library', 'help'];
  expandedIndex = 0;

  to_login = true;
  vcr = inject(ViewContainerRef);
  constructor(private router: Router) {}
  login() {
    this.to_login = !this.to_login;
    this.router.navigate(['phone', 'login']);
  }
}
