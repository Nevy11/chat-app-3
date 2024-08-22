import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cimage2Component } from './cimage-2.component';

describe('Cimage2Component', () => {
  let component: Cimage2Component;
  let fixture: ComponentFixture<Cimage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cimage2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cimage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
