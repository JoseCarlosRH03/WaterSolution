import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UserPerfilComponent } from './user-perfil/user-perfil.component';



const routes: Routes = [
  {path:'', component:MainComponent, 
    children:[
      {path:'UserPerFil', component:UserPerfilComponent},
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMainRoutingModule { }
