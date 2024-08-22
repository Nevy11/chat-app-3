import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarLargeComponent } from './top-bar-large.component';

describe('TopBarLargeComponent', () => {
  let component: TopBarLargeComponent;
  let fixture: ComponentFixture<TopBarLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopBarLargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBarLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
