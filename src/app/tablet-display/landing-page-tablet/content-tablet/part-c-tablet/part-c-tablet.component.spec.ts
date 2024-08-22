import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartCTabletComponent } from './part-c-tablet.component';

describe('PartCTabletComponent', () => {
  let component: PartCTabletComponent;
  let fixture: ComponentFixture<PartCTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartCTabletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartCTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
