import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialWebsiteContentComponent } from './official-website-content.component';

describe('OfficialWebsiteContentComponent', () => {
  let component: OfficialWebsiteContentComponent;
  let fixture: ComponentFixture<OfficialWebsiteContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfficialWebsiteContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficialWebsiteContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
