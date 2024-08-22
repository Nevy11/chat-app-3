import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CImage1Component } from './c-image1.component';

describe('CImage1Component', () => {
  let component: CImage1Component;
  let fixture: ComponentFixture<CImage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CImage1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CImage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
