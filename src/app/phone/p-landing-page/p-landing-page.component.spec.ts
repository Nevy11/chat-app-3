import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLandingPageComponent } from './p-landing-page.component';

describe('PLandingPageComponent', () => {
  let component: PLandingPageComponent;
  let fixture: ComponentFixture<PLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PLandingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
