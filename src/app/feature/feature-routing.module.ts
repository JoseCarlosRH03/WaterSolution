import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = 
[
  {path:'UserMain', loadChildren:() =>import('./user-main/user-main.module').then(m =>m.UserMainModule)},
  {path:'Clientes', loadChildren:() =>import('./empleado-solicitud/empleado-solicitud.module').then(m =>m.EmpleadoSolicitudModule)},
  {path:'Cotizacion', loadChildren:() =>import('./solicitud-cotizacion/solicitud-cotizacion.module').then(m =>m.SolicitudCotizacionModule)},
  {path:'Crear', loadChildren:() =>import('./solicitud-rutas/solicitud-rutas.module').then(m =>m.SolicitudRutasModule)},
  {path:'Brigadista', loadChildren:() =>import('./solicitud-brigadistas/solicitud-brigadistas.module').then(m =>m.SolicitudBrigadistasModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }