import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { ShellComponent } from './core/Components/shell/shell.component';
import { MainComponent } from './core/Components/Shell/main/main.component';




const routes: Routes = 
[ 
  {path:'',component: ShellComponent, children:[
    {path:'', loadChildren:() =>import('./feature/feature.module').then(m =>m.FeatureModule)}]
 },
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}