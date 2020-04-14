import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { CreateSolicitudComponent } from './create-solicitud/create-solicitud.component';


const routes: Routes = [
  {path:'Create', component:CreateClienteComponent },
  {path:'SolicitudCreate', component: CreateSolicitudComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoSolicitudRoutingModule { }
