import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainSolicitudesComponent } from './main-solicitudes/main-solicitudes.component';


const routes: Routes = [ 
  { path:'Solicitudes',component: MainSolicitudesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudCotizacionRoutingModule { }
