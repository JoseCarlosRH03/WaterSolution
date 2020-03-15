import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { AccessComponent } from './access/access.component';
import { LosePassWordComponent } from './lose-pass-word/lose-pass-word.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AccessComponent, LosePassWordComponent],
  imports: [
    LoginRoutingModule,
    SharedModule,
  ]
})
export class LoginModule { }
