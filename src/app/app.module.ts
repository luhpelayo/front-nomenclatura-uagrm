import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modulos
import { SharedModule } from './shared/shared.module';

// Componentes
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListadoNomenclaturasComponent } from './components/listado-nomenclaturas/listado-nomenclaturas.component';
import { VerNomenclaturasComponent } from './components/ver-nomenclaturas/ver-nomenclaturas.component';
import { FormsModule } from '@angular/forms';
import { AgregarEditarNomenclaturaComponent } from './components/agregar-editar-nomenclatura/agregar-editar-nomenclatura.component';
@NgModule({
  declarations: [
    AppComponent,

    ListadoNomenclaturasComponent,
    VerNomenclaturasComponent,
    AgregarEditarNomenclaturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
