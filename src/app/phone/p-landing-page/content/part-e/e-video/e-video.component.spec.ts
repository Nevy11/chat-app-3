import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EVideoComponent } from './e-video.component';

describe('EVideoComponent', () => {
  let component: EVideoComponent;
  let fixture: ComponentFixture<EVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
