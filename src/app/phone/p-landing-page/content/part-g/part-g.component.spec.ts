import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartGComponent } from './part-g.component';

describe('PartGComponent', () => {
  let component: PartGComponent;
  let fixture: ComponentFixture<PartGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
