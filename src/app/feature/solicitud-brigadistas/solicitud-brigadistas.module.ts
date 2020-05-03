import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudBrigadistasRoutingModule } from './solicitud-brigadistas-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './main/main.component';
import { ListaDetallesComponent } from './main/lista-detalles/lista-detalles.component';
import { SolicitudComponent } from './main/solicitud/solicitud.component';


@NgModule({
  declarations: [MainComponent, ListaDetallesComponent, SolicitudComponent],
  imports: [
    CommonModule,
    SolicitudBrigadistasRoutingModule,
    SharedModule
  ]
})
export class SolicitudBrigadistasModule { }
