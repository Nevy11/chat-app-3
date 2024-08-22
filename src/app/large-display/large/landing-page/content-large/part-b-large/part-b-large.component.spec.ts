import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartBLargeComponent } from './part-b-large.component';

describe('PartBLargeComponent', () => {
  let component: PartBLargeComponent;
  let fixture: ComponentFixture<PartBLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartBLargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartBLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
