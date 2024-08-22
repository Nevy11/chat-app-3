import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartHTabletComponent } from './part-h-tablet.component';

describe('PartHTabletComponent', () => {
  let component: PartHTabletComponent;
  let fixture: ComponentFixture<PartHTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartHTabletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartHTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
