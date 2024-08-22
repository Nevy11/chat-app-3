import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperCLargeComponent } from './upper-c-large.component';

describe('UpperCLargeComponent', () => {
  let component: UpperCLargeComponent;
  let fixture: ComponentFixture<UpperCLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpperCLargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpperCLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
