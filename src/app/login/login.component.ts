import { Component, OnInit, ViewContainerRef, inject } from '@angular/core';

@Component({
  selector: 'nevy11-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  vcr = inject(ViewContainerRef);
  ngOnInit(): void {
    this.vcr.remove(0);
    console.log('login component is called');
  }
}
