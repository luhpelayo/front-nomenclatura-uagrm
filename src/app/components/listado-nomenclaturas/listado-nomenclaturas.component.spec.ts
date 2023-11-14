import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoNomenclaturasComponent } from './listado-nomenclaturas.component';

describe('ListadoNomenclaturasComponent', () => {
  let component: ListadoNomenclaturasComponent;
  let fixture: ComponentFixture<ListadoNomenclaturasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoNomenclaturasComponent]
    });
    fixture = TestBed.createComponent(ListadoNomenclaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
