
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Nomenclatura } from 'src/app/interfaces/nomenclatura';
import { NomenclaturasService } from 'src/app/services/nomenclaturas.service';

@Component({
  selector: 'app-agregar-editar-nomenclatura',
  templateUrl: './agregar-editar-nomenclatura.component.html',
  styleUrls: ['./agregar-editar-nomenclatura.component.css']
})
export class AgregarEditarNomenclaturaComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup;
  id: number;

  operacion: string = 'Agregar';

  constructor(private fb: FormBuilder,
    private _nomenclaturaService: NomenclaturasService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      nombre_carrera: ['', Validators.required],
      plan_carrera: ['', Validators.required],
      codigo_titulo: ['', Validators.required],
      descripcion_titulo: ['', Validators.required],
      nivel: ['', Validators.required],
      estado: ['', Validators.required],
      facultad: ['', Validators.required],
    })
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {

    if(this.id != 0) {
      this.operacion = 'Editar';
      this.obtenerNomenclatura(this.id)
    }
  }

  obtenerNomenclatura(id: number) {
    this.loading = true;
    this._nomenclaturaService.getNomenclatura(id).subscribe(data => {
      this.form.setValue({
        nombre_carrera: data.nombre_carrera,
        plan_carrera: data.plan_carrera,
        codigo_titulo: data.codigo_titulo,
        descripcion_titulo: data.descripcion_titulo,
        nivel: data.nivel,
        estado: data.estado,
        facultad: data.facultad
      })
      this.loading = false;
    })
  }

  agregarEditarNomenclatura() {
    const nomenclatura: Nomenclatura = {
      id: this.id, // Agrega la propiedad 'id'
      nombre_carrera: this.form.value.nombre_carrera,
      plan_carrera: this.form.value.plan_carrera,
      codigo_titulo: this.form.value.codigo_titulo,
      descripcion_titulo: this.form.value.descripcion_titulo,
      nivel: this.form.value.nivel,
      estado: this.form.value.estado,
      facultad: this.form.value.facultad
    }
  
    if (this.id != 0) {
      this.editarNomenclatura(this.id, nomenclatura);
    } else {
      this.agregarNomenclatura(nomenclatura);
    }
  }
  

  editarNomenclatura(id: number, nomenclatura: Nomenclatura) {
    this.loading = true;
    this._nomenclaturaService.updateNomenclatura(id, nomenclatura).subscribe(() => {
      this.loading = false;
      this.mensajeExito('actualizada');
      this.router.navigate(['/listNomenclaturas']);
    })
  }

  agregarNomenclatura(nomenclatura: Nomenclatura) {
    this._nomenclaturaService.addNomenclatura(nomenclatura).subscribe(data => {
      this.mensajeExito('registrada');
      this.router.navigate(['/listNomenclaturas']);
    })
  }

  mensajeExito(texto: string) {
    this._snackBar.open(`La Nomenclatura fue ${texto} con éxito`,'', {
      duration: 4000,
      horizontalPosition: 'right',
    });
  }
}
