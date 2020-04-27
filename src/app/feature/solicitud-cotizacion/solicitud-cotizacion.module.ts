import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudCotizacionRoutingModule } from './solicitud-cotizacion-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainSolicitudesComponent } from './main-solicitudes/main-solicitudes.component';
import { TableSolisitudesComponent } from './main-solicitudes/table-solisitudes/table-solisitudes.component';
import { FomrSolisitudesComponent } from './main-solicitudes/fomr-solisitudes/fomr-solisitudes.component';
import { MainDetalleComponent } from './main-detalle/main-detalle.component';
import { MaterialesComponent } from './main-detalle/materiales/materiales.component';
import { FormCreateComponent } from './main-detalle/form-create/form-create.component';
import { DetalleComponent } from './main-detalle/detalle/detalle.component';
import { SeguimientosComponent } from './main-solicitudes/seguimientos/seguimientos.component';


@NgModule({
  declarations: [MainSolicitudesComponent, TableSolisitudesComponent, FomrSolisitudesComponent, MainDetalleComponent, MaterialesComponent, FormCreateComponent, DetalleComponent, SeguimientosComponent],
  imports: [
    CommonModule,
    SolicitudCotizacionRoutingModule,
    SharedModule
  ],
  entryComponents:[
    MainDetalleComponent,
    SeguimientosComponent
  ]
})
export class SolicitudCotizacionModule { }
