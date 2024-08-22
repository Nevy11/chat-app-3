import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLargeComponent } from './content-large.component';

describe('ContentLargeComponent', () => {
  let component: ContentLargeComponent;
  let fixture: ComponentFixture<ContentLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentLargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
