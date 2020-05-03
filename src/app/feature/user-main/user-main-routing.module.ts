import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UserPerfilComponent } from './user-perfil/user-perfil.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { LoginGuard } from '../../shared/Guards/login.guard';
import { UserFormComponent } from './UserCreate/user-form/user-form.component';


const routes: Routes = [
  { path:'', component:MainComponent, 
    canActivate:[LoginGuard],
    children:[
      {path:'UserPerFil', component:UserPerfilComponent},
      {path:'UserCreate', component:UserCreateComponent},
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMainRoutingModule { }
