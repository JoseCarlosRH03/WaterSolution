import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = 
[
  {path:'', loadChildren:() =>import('./login/login.module').then(m =>m.LoginModule)},
  {path:'UserMain', loadChildren:() =>import('./user-main/user-main.module').then(m =>m.UserMainModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }