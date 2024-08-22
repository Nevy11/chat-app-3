import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EContentLargeComponent } from './e-content-large.component';

describe('EContentLargeComponent', () => {
  let component: EContentLargeComponent;
  let fixture: ComponentFixture<EContentLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EContentLargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EContentLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
