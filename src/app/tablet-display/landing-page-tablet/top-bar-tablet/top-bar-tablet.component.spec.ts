import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarTabletComponent } from './top-bar-tablet.component';

describe('TopBarTabletComponent', () => {
  let component: TopBarTabletComponent;
  let fixture: ComponentFixture<TopBarTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopBarTabletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBarTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
