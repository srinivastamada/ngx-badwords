import { TestBed } from '@angular/core/testing';

import { NgxBadwordsService } from './ngx-badwords.service';

describe('NgxBadwordsService', () => {
  let service: NgxBadwordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBadwordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
