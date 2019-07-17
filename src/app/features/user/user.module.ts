import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { TablaComponent } from './Shell/tabla/tabla.component';
import { FormularioComponent } from './shell/formulario/formulario.component';



@NgModule({
  declarations: [ShellComponent, TablaComponent, FormularioComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
