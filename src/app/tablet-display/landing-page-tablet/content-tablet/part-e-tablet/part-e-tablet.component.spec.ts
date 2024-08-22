import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartETabletComponent } from './part-e-tablet.component';

describe('PartETabletComponent', () => {
  let component: PartETabletComponent;
  let fixture: ComponentFixture<PartETabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartETabletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartETabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
