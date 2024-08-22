import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Side1LargeComponent } from './side1-large.component';

describe('Side1LargeComponent', () => {
  let component: Side1LargeComponent;
  let fixture: ComponentFixture<Side1LargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Side1LargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Side1LargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
