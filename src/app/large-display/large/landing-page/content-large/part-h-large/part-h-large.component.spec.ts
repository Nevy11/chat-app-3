import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartHLargeComponent } from './part-h-large.component';

describe('PartHLargeComponent', () => {
  let component: PartHLargeComponent;
  let fixture: ComponentFixture<PartHLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartHLargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartHLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
