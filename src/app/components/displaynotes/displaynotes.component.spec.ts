import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaynotesComponent } from './displaynotes.component';

describe('DisplaynotesComponent', () => {
  let component: DisplaynotesComponent;
  let fixture: ComponentFixture<DisplaynotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaynotesComponent]
    });
    fixture = TestBed.createComponent(DisplaynotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
