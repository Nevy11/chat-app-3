import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartCLargeComponent } from './part-c-large.component';

describe('PartCLargeComponent', () => {
  let component: PartCLargeComponent;
  let fixture: ComponentFixture<PartCLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartCLargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartCLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
