import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMainRoutingModule } from './user-main-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './main/main.component';
import { UserPerfilComponent } from './user-perfil/user-perfil.component';


@NgModule({
  declarations: [MainComponent, UserPerfilComponent],
  imports: [
    CommonModule,
    UserMainRoutingModule,
    SharedModule,
  ]
})
export class UserMainModule { }
