import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { LoginService } from './shared/Services/login.service';
import {HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationServiceService } from './shared/Services/notification-service.service';
import { MatNativeDateModule } from '@angular/material';
import { EmpleadoServiceService } from './shared/Services/empleado-service.service';
import { ClienteSolicitudesService } from './shared/Services/cliente-solicitudes.service';
import { CotizacionSolicitudService } from './shared/Services/cotizacion-solicitud.service';
import { RutaServicesService } from './shared/Services/ruta-services.service';
import { BrigadistaService } from './shared/Services/brigadista.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatNativeDateModule,
  ],
  providers: [
    LoginService,
    NotificationServiceService,
    EmpleadoServiceService,
    ClienteSolicitudesService,
    CotizacionSolicitudService,
    RutaServicesService,
    BrigadistaService
  ],
  bootstrap: [AppComponent],
    
    

})
export class AppModule { }
