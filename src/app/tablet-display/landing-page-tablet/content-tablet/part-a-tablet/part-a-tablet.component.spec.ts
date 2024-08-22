import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartATabletComponent } from './part-a-tablet.component';

describe('PartATabletComponent', () => {
  let component: PartATabletComponent;
  let fixture: ComponentFixture<PartATabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartATabletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartATabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
