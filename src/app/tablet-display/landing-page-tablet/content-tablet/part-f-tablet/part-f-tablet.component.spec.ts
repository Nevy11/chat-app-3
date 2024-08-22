import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartFTabletComponent } from './part-f-tablet.component';

describe('PartFTabletComponent', () => {
  let component: PartFTabletComponent;
  let fixture: ComponentFixture<PartFTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartFTabletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartFTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
