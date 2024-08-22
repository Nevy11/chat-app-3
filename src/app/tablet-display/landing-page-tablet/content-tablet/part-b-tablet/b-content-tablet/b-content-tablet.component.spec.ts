import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BContentTabletComponent } from './b-content-tablet.component';

describe('BContentTabletComponent', () => {
  let component: BContentTabletComponent;
  let fixture: ComponentFixture<BContentTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BContentTabletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BContentTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
