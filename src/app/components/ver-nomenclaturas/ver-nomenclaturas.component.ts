
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Nomenclatura } from 'src/app/interfaces/nomenclatura';
import { NomenclaturasService } from 'src/app/services/nomenclaturas.service';

@Component({
  selector: 'app-ver-nomenclaturas',
  templateUrl: './ver-nomenclaturas.component.html',
  styleUrls: ['./ver-nomenclaturas.component.css']
})

export class VerNomenclaturasComponent implements OnInit {
  id!: number;
  nomenclatura!: Nomenclatura;
  loading: boolean = false;
  nombreFacultad?: string;
  routeSub!: Subscription;

  constructor(
    private nomenclaturaService: NomenclaturasService,
    private route: ActivatedRoute
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.obtenerNomenclatura();
  }

  obtenerNomenclatura() {
    this.loading = true;
    this.nomenclaturaService.getNomenclatura(this.id).subscribe(
      (data: Nomenclatura) => {
        this.nomenclatura = data;
        this.nombreFacultad = data.nombreFacultad; // Asegúrate de que la propiedad sea correcta
        this.loading = false;
      },
      error => {
        console.error(error);
        this.loading = false;
      }
    );
  }
}
