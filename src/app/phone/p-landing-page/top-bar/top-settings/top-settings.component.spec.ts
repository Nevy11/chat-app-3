import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSettingsComponent } from './top-settings.component';

describe('TopSettingsComponent', () => {
  let component: TopSettingsComponent;
  let fixture: ComponentFixture<TopSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
