import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{
  path:'', loadChildren:() => import('./user-login/user-login.module').then(m => m.UserLoginModule)
},
{ path:'Usuario', 
  loadChildren:() => import('./creator-user/creator-user.module').then(m => m.CreatorUserModule)
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
