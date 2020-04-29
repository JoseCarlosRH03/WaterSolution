import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainRutaComponent } from './main-ruta/main-ruta.component';


const routes: Routes = [
  { path:'Rutas',component: MainRutaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudRutasRoutingModule { }
