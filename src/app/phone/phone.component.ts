import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TopSettingsComponent } from './p-landing-page/top-bar/top-settings/top-settings.component';

@Component({
  selector: 'nevy11-phone',
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.scss',
})
export class PhoneComponent implements OnInit {
  @ViewChild(TopSettingsComponent, { read: true, static: true })
  topSettings!: TopSettingsComponent;
  login: boolean = false;
  landing_page: boolean = true;
  ngOnInit(): void {}
}
