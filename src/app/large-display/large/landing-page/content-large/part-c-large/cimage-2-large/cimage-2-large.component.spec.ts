import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cimage2LargeComponent } from './cimage-2-large.component';

describe('Cimage2LargeComponent', () => {
  let component: Cimage2LargeComponent;
  let fixture: ComponentFixture<Cimage2LargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cimage2LargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cimage2LargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
