import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperContentTabletComponent } from './upper-content-tablet.component';

describe('UpperContentTabletComponent', () => {
  let component: UpperContentTabletComponent;
  let fixture: ComponentFixture<UpperContentTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpperContentTabletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpperContentTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
