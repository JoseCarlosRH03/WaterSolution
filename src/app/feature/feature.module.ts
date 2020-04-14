import { NgModule } from '@angular/core';
import { FeatureRoutingModule } from './feature-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserMainModule } from './user-main/user-main.module';




@NgModule({
  declarations: [],
  imports: [
    UserMainModule,
    FeatureRoutingModule,
    SharedModule,
  ]
})
export class FeatureModule { }
