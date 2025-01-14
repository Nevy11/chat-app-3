import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCenterContentComponent } from './help-center-content.component';

describe('HelpCenterContentComponent', () => {
  let component: HelpCenterContentComponent;
  let fixture: ComponentFixture<HelpCenterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelpCenterContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpCenterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
