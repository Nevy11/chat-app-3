import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletDisplayComponent } from './tablet-display.component';

describe('TabletDisplayComponent', () => {
  let component: TabletDisplayComponent;
  let fixture: ComponentFixture<TabletDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabletDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabletDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
