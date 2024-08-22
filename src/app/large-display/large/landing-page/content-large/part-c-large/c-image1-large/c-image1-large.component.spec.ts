import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CImage1LargeComponent } from './c-image1-large.component';

describe('CImage1LargeComponent', () => {
  let component: CImage1LargeComponent;
  let fixture: ComponentFixture<CImage1LargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CImage1LargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CImage1LargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
