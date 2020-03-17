import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { AccessComponent } from './access/access.component';
import { LosePassWordComponent } from './lose-pass-word/lose-pass-word.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PermitionAcessComponent } from './permition-acess/permition-acess.component';
import { PermitionAcessBodyComponent } from './PermitionAcess/permition-acess-body/permition-acess-body.component';







@NgModule({
  declarations: [AccessComponent, LosePassWordComponent, PermitionAcessComponent, PermitionAcessBodyComponent ],
  imports: [
    LoginRoutingModule,
    SharedModule,
  ]
})
export class LoginModule { }
