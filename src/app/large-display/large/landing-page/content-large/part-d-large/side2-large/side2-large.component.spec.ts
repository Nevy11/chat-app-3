import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Side2LargeComponent } from './side2-large.component';

describe('Side2LargeComponent', () => {
  let component: Side2LargeComponent;
  let fixture: ComponentFixture<Side2LargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Side2LargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Side2LargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
