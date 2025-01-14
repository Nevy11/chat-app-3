import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeDisplayComponent } from './large-display.component';

describe('LargeDisplayComponent', () => {
  let component: LargeDisplayComponent;
  let fixture: ComponentFixture<LargeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LargeDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
