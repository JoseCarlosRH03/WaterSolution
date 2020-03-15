import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//con la variable imporetamos todos los modulos de material 
import * as material from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   material.MatInputModule,
   material.MatToolbarModule,
   material.MatIconModule,
   material.MatButtonModule,
   material.MatSidenavModule,
   material.MatGridListModule,
   material.MatListModule
  ],
  exports: [
    material.MatInputModule,
    material.MatToolbarModule,
    material.MatIconModule,
    material.MatButtonModule,
    material.MatSidenavModule,
    material.MatGridListModule,
    material.MatListModule
  ]
})
export class MatirialModule { }
