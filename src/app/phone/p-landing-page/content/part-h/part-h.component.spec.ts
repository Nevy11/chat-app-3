import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartHComponent } from './part-h.component';

describe('PartHComponent', () => {
  let component: PartHComponent;
  let fixture: ComponentFixture<PartHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartHComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
