import { NgModule } from '@angular/core';
import { FeatureRoutingModule } from './feature-routing.module';
import { UserMainModule } from './user-main/user-main.module';
import { SharedModule } from '../shared/shared.module';
import { EmpleadoSolicitudModule } from './empleado-solicitud/empleado-solicitud.module';


@NgModule({
  
  imports: [
    UserMainModule,
    EmpleadoSolicitudModule,
    FeatureRoutingModule,
    SharedModule,
  ]
})
export class FeatureModule { }
