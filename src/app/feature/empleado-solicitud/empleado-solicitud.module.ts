import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadoSolicitudRoutingModule } from './empleado-solicitud-routing.module';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateSolicitudComponent } from './create-solicitud/create-solicitud.component';


@NgModule({
  declarations: [CreateClienteComponent, CreateSolicitudComponent],
  imports: [
    CommonModule,
    EmpleadoSolicitudRoutingModule,
    SharedModule
  ]
})
export class EmpleadoSolicitudModule { }
