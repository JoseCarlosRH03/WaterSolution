import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { EmpleadoSolicitudRoutingModule } from './empleado-solicitud-routing.module';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { CreateSolicitudComponent } from './create-solicitud/create-solicitud.component';
import { ListClienteComponent } from './list-cliente/list-cliente.component';
import { SolicitudesClientesComponent } from './solicitudes-clientes/solicitudes-clientes.component';
import { SolicitudcotizacionComponent } from './solicitudes-clientes/solicitudcotizacion/solicitudcotizacion.component';
import { SolicitudrutasComponent } from './solicitudes-clientes/solicitudrutas/solicitudrutas.component';
import { SolicitudSeguimientosComponent } from './solicitudes-clientes/solicitud-seguimientos/solicitud-seguimientos.component';




@NgModule({
  declarations: [CreateClienteComponent,
    CreateSolicitudComponent, 
    ListClienteComponent, 
    SolicitudesClientesComponent, 
    SolicitudcotizacionComponent,
    SolicitudrutasComponent,
    SolicitudSeguimientosComponent
  ],
  imports: [
    CommonModule,
    EmpleadoSolicitudRoutingModule,
    SharedModule
  ],
  entryComponents:[
    CreateClienteComponent,
  ],
  exports:[
    
  ]
    
  
  
})
export class EmpleadoSolicitudModule { }
