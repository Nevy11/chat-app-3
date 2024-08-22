import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Image1AIComponent } from './image-1-ai.component';

describe('Image1AIComponent', () => {
  let component: Image1AIComponent;
  let fixture: ComponentFixture<Image1AIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Image1AIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Image1AIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
