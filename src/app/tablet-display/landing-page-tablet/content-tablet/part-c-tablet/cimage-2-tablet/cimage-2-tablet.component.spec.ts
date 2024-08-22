import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cimage2TabletComponent } from './cimage-2-tablet.component';

describe('Cimage2TabletComponent', () => {
  let component: Cimage2TabletComponent;
  let fixture: ComponentFixture<Cimage2TabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cimage2TabletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cimage2TabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
