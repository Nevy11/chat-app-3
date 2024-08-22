import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EVideoLargeComponent } from './e-video-large.component';

describe('EVideoLargeComponent', () => {
  let component: EVideoLargeComponent;
  let fixture: ComponentFixture<EVideoLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EVideoLargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EVideoLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
