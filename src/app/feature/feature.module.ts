import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [],
  imports: [
    FeatureRoutingModule,
    SharedModule,
  ]
})
export class FeatureModule { }
