import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EContentTabletComponent } from './e-content-tablet.component';

describe('EContentTabletComponent', () => {
  let component: EContentTabletComponent;
  let fixture: ComponentFixture<EContentTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EContentTabletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EContentTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
