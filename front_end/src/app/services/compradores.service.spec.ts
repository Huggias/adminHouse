import { TestBed } from '@angular/core/testing';

import { CompradoresService } from './compradores.service';

describe('CompradoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompradoresService = TestBed.get(CompradoresService);
    expect(service).toBeTruthy();
  });
});
