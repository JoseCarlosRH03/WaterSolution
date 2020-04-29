import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudRutasRoutingModule } from './solicitud-rutas-routing.module';
import { MainRutaComponent } from './main-ruta/main-ruta.component';
import { FormSolicitudComponent } from './main-ruta/form-solicitud/form-solicitud.component';
import { TablaSolicitudesComponent } from './main-ruta/tabla-solicitudes/tabla-solicitudes.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MainRutaComponent, FormSolicitudComponent, TablaSolicitudesComponent],
  imports: [
    CommonModule,
    SolicitudRutasRoutingModule,
    SharedModule
  ]
})
export class SolicitudRutasModule { }
