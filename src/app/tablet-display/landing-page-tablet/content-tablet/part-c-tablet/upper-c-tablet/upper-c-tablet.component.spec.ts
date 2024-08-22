import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperCTabletComponent } from './upper-c-tablet.component';

describe('UpperCTabletComponent', () => {
  let component: UpperCTabletComponent;
  let fixture: ComponentFixture<UpperCTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpperCTabletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpperCTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
