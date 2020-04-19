import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSolicitudComponent } from './create-solicitud/create-solicitud.component';
import { ListClienteComponent } from './list-cliente/list-cliente.component';
import { SolicitudesClientesComponent } from './solicitudes-clientes/solicitudes-clientes.component';


const routes: Routes = [
  {path:'Create', component:ListClienteComponent },
  {path:'SolicitudCreate', component: CreateSolicitudComponent},
  {path:'Solicitudes', component: SolicitudesClientesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoSolicitudRoutingModule { }
