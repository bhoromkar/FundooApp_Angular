import { TestBed } from '@angular/core/testing';

import { NotesserviceService } from './notesservice.service';

describe('NotesserviceService', () => {
  let service: NotesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
