import { NgModule } from '@angular/core';
import { FeatureRoutingModule } from './feature-routing.module';
import { UserMainModule } from './user-main/user-main.module';
import { SharedModule } from '../shared/shared.module';
import { EmpleadoSolicitudModule } from './empleado-solicitud/empleado-solicitud.module';
import { SolicitudCotizacionModule } from './solicitud-cotizacion/solicitud-cotizacion.module';
import { SolicitudSeguimientosComponent } from './empleado-solicitud/solicitudes-clientes/solicitud-seguimientos/solicitud-seguimientos.component';


@NgModule({
  
  imports: [
    UserMainModule,
    EmpleadoSolicitudModule,
    SolicitudCotizacionModule,
    FeatureRoutingModule,
    SharedModule,
  ], entryComponents:[
    SolicitudSeguimientosComponent
  ]
})
export class FeatureModule { }
