import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartELargeComponent } from './part-e-large.component';

describe('PartELargeComponent', () => {
  let component: PartELargeComponent;
  let fixture: ComponentFixture<PartELargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartELargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartELargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
