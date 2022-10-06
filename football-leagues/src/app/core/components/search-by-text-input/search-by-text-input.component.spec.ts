import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByTextInputComponent } from './search-by-text-input.component';

describe('SearchByTextInputComponent', () => {
  let component: SearchByTextInputComponent;
  let fixture: ComponentFixture<SearchByTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByTextInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
