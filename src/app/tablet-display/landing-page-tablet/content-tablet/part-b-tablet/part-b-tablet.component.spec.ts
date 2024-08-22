import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartBTabletComponent } from './part-b-tablet.component';

describe('PartBTabletComponent', () => {
  let component: PartBTabletComponent;
  let fixture: ComponentFixture<PartBTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartBTabletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartBTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
