import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartDTabletComponent } from './part-d-tablet.component';

describe('PartDTabletComponent', () => {
  let component: PartDTabletComponent;
  let fixture: ComponentFixture<PartDTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartDTabletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartDTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
