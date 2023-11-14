import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarNomenclaturaComponent } from './agregar-editar-nomenclatura.component';

describe('AgregarEditarNomenclaturaComponent', () => {
  let component: AgregarEditarNomenclaturaComponent;
  let fixture: ComponentFixture<AgregarEditarNomenclaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEditarNomenclaturaComponent]
    });
    fixture = TestBed.createComponent(AgregarEditarNomenclaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
