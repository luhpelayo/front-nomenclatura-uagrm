import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Nomenclatura } from 'src/app/interfaces/nomenclatura';
import { NomenclaturasService } from 'src/app/services/nomenclaturas.service';

@Component({
  selector: 'app-listado-nomenclaturas',
  templateUrl: './listado-nomenclaturas.component.html',
  styleUrls: ['./listado-nomenclaturas.component.css']
})
export class ListadoNomenclaturasComponent implements OnInit {
  searchQuery: string = '';  // Agrega esta línea
  nomenclaturas: Nomenclatura[] = [];
  loading = true;
  displayedColumns: string[] = ['nombre_carrera', 'plan_carrera', 'codigo_titulo', 'nivel', 'acciones'];

  dataSource = new MatTableDataSource<Nomenclatura>(this.nomenclaturas);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private nomenclaturasService: NomenclaturasService) {
    this.dataSource = new MatTableDataSource<Nomenclatura>(this.nomenclaturas);
  }

  ngOnInit(): void {
    this.loadNomenclaturas();
    this.dataSource.paginator = this.paginator;
  }

  loadNomenclaturas() {
    this.loading = true;
    this.nomenclaturasService.getNomenclaturas().subscribe(data => {
      this.nomenclaturas = data;
      this.dataSource.data = this.nomenclaturas;
      this.loading = false;
    });
  }

  searchNomenclaturas() {
    this.loading = true;
    this.nomenclaturasService.searchNomenclaturas(this.searchQuery).subscribe(data => {
      console.log(data); // Verifica que los datos contengan la propiedad 'nombre'
      this.nomenclaturas = data;
      this.dataSource.data = this.nomenclaturas;
      this.loading = false;
      console.log(this.nomenclaturas);
    });
  }
}
