import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartALargeComponent } from './part-a-large.component';

describe('PartALargeComponent', () => {
  let component: PartALargeComponent;
  let fixture: ComponentFixture<PartALargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartALargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartALargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
