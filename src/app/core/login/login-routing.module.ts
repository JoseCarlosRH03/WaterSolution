import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessComponent } from './access/access.component';
import { LosePassWordComponent } from './lose-pass-word/lose-pass-word.component';



const routes: Routes = [
  {path:'', component:AccessComponent},
  {path:'LosePassWord', component:LosePassWordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
