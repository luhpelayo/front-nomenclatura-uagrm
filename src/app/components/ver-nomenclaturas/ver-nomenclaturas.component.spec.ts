import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerNomenclaturasComponent } from './ver-nomenclaturas.component';

describe('VerNomenclaturasComponent', () => {
  let component: VerNomenclaturasComponent;
  let fixture: ComponentFixture<VerNomenclaturasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerNomenclaturasComponent]
    });
    fixture = TestBed.createComponent(VerNomenclaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
