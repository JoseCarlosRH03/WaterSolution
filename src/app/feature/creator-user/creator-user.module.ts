import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorUserRoutingModule } from './creator-user-routing.module';
import { UserShellComponent } from './user-shell/user-shell.component';
import { FormComponent } from './user-shell/form/form.component';
import { ListComponent } from './user-shell/list/list.component';


@NgModule({
  declarations: [UserShellComponent, FormComponent, ListComponent],
  imports: [
    CommonModule,
    CreatorUserRoutingModule
  ]
})
export class CreatorUserModule { }
