import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Side1TabletComponent } from './side1-tablet.component';

describe('Side1TabletComponent', () => {
  let component: Side1TabletComponent;
  let fixture: ComponentFixture<Side1TabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Side1TabletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Side1TabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
