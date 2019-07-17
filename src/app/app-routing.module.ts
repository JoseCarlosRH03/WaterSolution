import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './core/shell/shell.component';

const routes: Routes = [
  {path:'',component:ShellComponent, children:[
   {path:'',  loadChildren:() => import('./feature/feature.module').then(m => m.FeatureModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
