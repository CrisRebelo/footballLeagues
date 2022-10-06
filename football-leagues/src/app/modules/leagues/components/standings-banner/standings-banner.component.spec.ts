import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsBannerComponent } from './standings-banner.component';

describe('StandingsBannerComponent', () => {
  let component: StandingsBannerComponent;
  let fixture: ComponentFixture<StandingsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandingsBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandingsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
