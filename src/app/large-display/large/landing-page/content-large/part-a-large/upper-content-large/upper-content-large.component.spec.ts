import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperContentLargeComponent } from './upper-content-large.component';

describe('UpperContentLargeComponent', () => {
  let component: UpperContentLargeComponent;
  let fixture: ComponentFixture<UpperContentLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpperContentLargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpperContentLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
