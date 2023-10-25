import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallnotesComponent } from './getallnotes.component';

describe('GetallnotesComponent', () => {
  let component: GetallnotesComponent;
  let fixture: ComponentFixture<GetallnotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetallnotesComponent]
    });
    fixture = TestBed.createComponent(GetallnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
