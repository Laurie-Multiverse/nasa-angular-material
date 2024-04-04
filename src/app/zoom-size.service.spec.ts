import { TestBed } from '@angular/core/testing';

import { ZoomSizeService } from './zoom-size.service';

describe('ZoomSizeService', () => {
  let service: ZoomSizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoomSizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
