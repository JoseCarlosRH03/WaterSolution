import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { MatirialModule } from "./matirial/matirial.module";
import { TelefonoPipe } from './Pipes/telefono.pipe';
import { CedulaPipe } from './Pipes/cedula.pipe';



@NgModule({
  
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatirialModule,
    
  ],
  declarations:[
    TelefonoPipe,
    CedulaPipe
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatirialModule,
    TelefonoPipe,
    CedulaPipe
  ]

})
export class SharedModule { }
