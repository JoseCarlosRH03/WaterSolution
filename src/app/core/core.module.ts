import { NgModule } from '@angular/core';
import { ShellComponent } from './Components/shell/shell.component';
import { MainComponent } from './Components/Shell/main/main.component';
import { FooterComponent } from './Components/Shell/footer/footer.component';
import { HeaderComponent } from './Components/Shell/header/header.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from '../shared/shared.module';
import { LoginModule } from './login/login.module';






@NgModule({
  declarations: [ShellComponent, MainComponent, FooterComponent, HeaderComponent],
  imports: [
    PagesModule,
    LoginModule,
    SharedModule,

  ]
})
export class CoreModule { }
