import { TestBed } from '@angular/core/testing';

import { NomenclaturasService } from './nomenclaturas.service';

describe('NomenclaturasService', () => {
  let service: NomenclaturasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomenclaturasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
