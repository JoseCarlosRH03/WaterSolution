import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = 
[
  {path:'UserMain', loadChildren:() =>import('./user-main/user-main.module').then(m =>m.UserMainModule)},
  {path:'Clientes', loadChildren:() =>import('./empleado-solicitud/empleado-solicitud.module').then(m =>m.EmpleadoSolicitudModule)},
  {path:'Cotizacion', loadChildren:() =>import('./solicitud-cotizacion/solicitud-cotizacion.module').then(m =>m.SolicitudCotizacionModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }