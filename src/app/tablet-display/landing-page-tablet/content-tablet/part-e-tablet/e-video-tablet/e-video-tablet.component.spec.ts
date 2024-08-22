import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EVideoTabletComponent } from './e-video-tablet.component';

describe('EVideoTabletComponent', () => {
  let component: EVideoTabletComponent;
  let fixture: ComponentFixture<EVideoTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EVideoTabletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EVideoTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
