import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSolicitudComponent } from './create-solicitud/create-solicitud.component';
import { ListClienteComponent } from './list-cliente/list-cliente.component';


const routes: Routes = [
  {path:'Create', component:ListClienteComponent },
  {path:'SolicitudCreate', component: CreateSolicitudComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoSolicitudRoutingModule { }
