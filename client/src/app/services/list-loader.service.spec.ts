import { TestBed, inject } from '@angular/core/testing';

import { ListLoaderService } from './list-loader.service';

describe('ListLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListLoaderService]
    });
  });

  it('should be created', inject([ListLoaderService], (service: ListLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
