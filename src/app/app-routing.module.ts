import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Componentes
import { ListadoNomenclaturasComponent } from './components/listado-nomenclaturas/listado-nomenclaturas.component';
import { VerNomenclaturasComponent } from './components/ver-nomenclaturas/ver-nomenclaturas.component';
import { AgregarEditarNomenclaturaComponent } from './components/agregar-editar-nomenclatura/agregar-editar-nomenclatura.component';

const routes: Routes = [
  { path: '', redirectTo: 'listNomenclaturas', pathMatch: 'full' },
  //nomenclaturas
  { path:'listNomenclaturas', component: ListadoNomenclaturasComponent },
  { path:'verNomenclatura/:id', component: VerNomenclaturasComponent },
  { path:'agregarNomenclatura', component: AgregarEditarNomenclaturaComponent },
  { path:'editarNomenclatura/:id', component: AgregarEditarNomenclaturaComponent },
  //
  { path: '**',  redirectTo: 'listMascotas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
