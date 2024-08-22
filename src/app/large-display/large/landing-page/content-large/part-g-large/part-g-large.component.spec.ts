import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartGLargeComponent } from './part-g-large.component';

describe('PartGLargeComponent', () => {
  let component: PartGLargeComponent;
  let fixture: ComponentFixture<PartGLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartGLargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartGLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
