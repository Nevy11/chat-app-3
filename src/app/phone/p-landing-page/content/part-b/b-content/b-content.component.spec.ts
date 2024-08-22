import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BContentComponent } from './b-content.component';

describe('BContentComponent', () => {
  let component: BContentComponent;
  let fixture: ComponentFixture<BContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
