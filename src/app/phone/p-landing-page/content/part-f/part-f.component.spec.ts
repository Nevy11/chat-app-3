import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartFComponent } from './part-f.component';

describe('PartFComponent', () => {
  let component: PartFComponent;
  let fixture: ComponentFixture<PartFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
