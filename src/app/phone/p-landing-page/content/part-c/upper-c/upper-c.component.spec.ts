import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperCComponent } from './upper-c.component';

describe('UpperCComponent', () => {
  let component: UpperCComponent;
  let fixture: ComponentFixture<UpperCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpperCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpperCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
