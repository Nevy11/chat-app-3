import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartFLargeComponent } from './part-f-large.component';

describe('PartFLargeComponent', () => {
  let component: PartFLargeComponent;
  let fixture: ComponentFixture<PartFLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartFLargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartFLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
