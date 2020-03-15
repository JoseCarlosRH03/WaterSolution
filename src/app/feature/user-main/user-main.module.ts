import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMainRoutingModule } from './user-main-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    UserMainRoutingModule,
    SharedModule,
  ]
})
export class UserMainModule { }
