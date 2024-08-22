import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartDLargeComponent } from './part-d-large.component';

describe('PartDLargeComponent', () => {
  let component: PartDLargeComponent;
  let fixture: ComponentFixture<PartDLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartDLargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartDLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
