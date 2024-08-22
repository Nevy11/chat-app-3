import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Image1AiLargeComponent } from './image-1-ai-large.component';

describe('Image1AiLargeComponent', () => {
  let component: Image1AiLargeComponent;
  let fixture: ComponentFixture<Image1AiLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Image1AiLargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Image1AiLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
