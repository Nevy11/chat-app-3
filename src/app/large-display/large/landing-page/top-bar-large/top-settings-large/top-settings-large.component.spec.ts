import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSettingsLargeComponent } from './top-settings-large.component';

describe('TopSettingsLargeComponent', () => {
  let component: TopSettingsLargeComponent;
  let fixture: ComponentFixture<TopSettingsLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopSettingsLargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSettingsLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
