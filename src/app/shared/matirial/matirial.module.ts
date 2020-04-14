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
   material.MatListModule,
   material.MatFormFieldModule,
   material.MatSnackBarModule, 
   material.MatTableModule,
   material.MatPaginatorModule,
   material.MatDatepickerModule,
   material.MatSelectModule,
   material.MatDialogModule
  ],
  exports: [
    material.MatInputModule,
    material.MatToolbarModule,
    material.MatIconModule,
    material.MatButtonModule,
    material.MatSidenavModule,
    material.MatGridListModule,
    material.MatListModule,
    material.MatFormFieldModule,
    material.MatSnackBarModule, 
    material.MatTableModule,
    material.MatPaginatorModule,
    material.MatDatepickerModule,
    material.MatSelectModule,
    material.MatDialogModule
  ]
})
export class MatirialModule { }
