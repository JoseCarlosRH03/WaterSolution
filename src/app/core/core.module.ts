import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './Shell/header/header.component';
import { MainComponent } from './Shell/main/main.component';
import { FooterComponent } from './Shell/footer/footer.component';



@NgModule({
  declarations: [ShellComponent, HeaderComponent, MainComponent, FooterComponent],
  imports: [
    CommonModule
  ]})
export class CoreModule { }
