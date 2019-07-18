import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLoginRoutingModule } from './user-login-routing.module';
import { FormLoginComponent } from './form-login/form-login.component';


@NgModule({
  declarations: [FormLoginComponent],
  imports: [
    CommonModule,
    UserLoginRoutingModule
  ]
})
export class UserLoginModule { }
