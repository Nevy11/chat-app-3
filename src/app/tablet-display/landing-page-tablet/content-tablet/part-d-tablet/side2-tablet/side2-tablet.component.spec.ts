import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Side2TabletComponent } from './side2-tablet.component';

describe('Side2TabletComponent', () => {
  let component: Side2TabletComponent;
  let fixture: ComponentFixture<Side2TabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Side2TabletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Side2TabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
