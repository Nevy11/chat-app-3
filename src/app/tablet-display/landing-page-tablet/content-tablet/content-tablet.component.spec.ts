import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTabletComponent } from './content-tablet.component';

describe('ContentTabletComponent', () => {
  let component: ContentTabletComponent;
  let fixture: ComponentFixture<ContentTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentTabletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
