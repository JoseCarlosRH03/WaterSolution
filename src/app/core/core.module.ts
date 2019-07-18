import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './Shell/header/header.component';
import { MainComponent } from './Shell/main/main.component';
import { FooterComponent } from './Shell/footer/footer.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ShellComponent, HeaderComponent, MainComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedModule
  ]})
export class CoreModule { }
