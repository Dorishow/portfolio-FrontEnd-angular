import { TestBed } from '@angular/core/testing';

import { DummyTasksService } from './dummy-tasks.service';

describe('DummyTasksService', () => {
  let service: DummyTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
