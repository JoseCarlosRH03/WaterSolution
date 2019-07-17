import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
