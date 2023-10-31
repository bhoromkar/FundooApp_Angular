import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComponenetComponent } from './update-componenet.component';

describe('UpdateComponenetComponent', () => {
  let component: UpdateComponenetComponent;
  let fixture: ComponentFixture<UpdateComponenetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateComponenetComponent]
    });
    fixture = TestBed.createComponent(UpdateComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
