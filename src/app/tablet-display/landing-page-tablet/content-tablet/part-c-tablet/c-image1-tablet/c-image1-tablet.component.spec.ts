import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CImage1TabletComponent } from './c-image1-tablet.component';

describe('CImage1TabletComponent', () => {
  let component: CImage1TabletComponent;
  let fixture: ComponentFixture<CImage1TabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CImage1TabletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CImage1TabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
