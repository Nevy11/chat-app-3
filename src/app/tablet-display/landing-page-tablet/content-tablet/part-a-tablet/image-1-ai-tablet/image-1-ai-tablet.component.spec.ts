import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Image1AiTabletComponent } from './image-1-ai-tablet.component';

describe('Image1AiTabletComponent', () => {
  let component: Image1AiTabletComponent;
  let fixture: ComponentFixture<Image1AiTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Image1AiTabletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Image1AiTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
