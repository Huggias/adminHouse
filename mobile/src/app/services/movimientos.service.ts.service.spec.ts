import { TestBed } from '@angular/core/testing';

import { Movimientos.Service.TsService } from './movimientos.service.ts.service';

describe('Movimientos.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Movimientos.Service.TsService = TestBed.get(Movimientos.Service.TsService);
    expect(service).toBeTruthy();
  });
});
