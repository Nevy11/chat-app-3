import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageTabletComponent } from './landing-page-tablet.component';

describe('LandingPageTabletComponent', () => {
  let component: LandingPageTabletComponent;
  let fixture: ComponentFixture<LandingPageTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPageTabletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
