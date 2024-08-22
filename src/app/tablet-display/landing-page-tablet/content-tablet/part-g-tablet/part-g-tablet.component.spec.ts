import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartGTabletComponent } from './part-g-tablet.component';

describe('PartGTabletComponent', () => {
  let component: PartGTabletComponent;
  let fixture: ComponentFixture<PartGTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartGTabletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartGTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
