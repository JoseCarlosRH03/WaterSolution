import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './core/shell/shell.component';

const routes: Routes = [
  {path:'',component:ShellComponent, children:[
   {path:'user',  loadChildren:() => import('./features/features.module').then(m => m.FeaturesModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
