import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSettingsTabletComponent } from './top-settings-tablet.component';

describe('TopSettingsTabletComponent', () => {
  let component: TopSettingsTabletComponent;
  let fixture: ComponentFixture<TopSettingsTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopSettingsTabletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSettingsTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
