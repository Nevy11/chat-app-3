import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BContentLargeComponent } from './b-content-large.component';

describe('BContentLargeComponent', () => {
  let component: BContentLargeComponent;
  let fixture: ComponentFixture<BContentLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BContentLargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BContentLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
