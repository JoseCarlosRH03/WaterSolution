import { Component, OnInit } from '@angular/core';
import { CotizacionSolicitudService } from 'src/app/shared/Services/cotizacion-solicitud.service';
import { NotificationServiceService } from 'src/app/shared/Services/notification-service.service';
import { RutaServicesService } from 'src/app/shared/Services/ruta-services.service';
import { BrigadistaService } from 'src/app/shared/Services/brigadista.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { SeguimientosComponent } from 'src/app/feature/solicitud-cotizacion/main-solicitudes/seguimientos/seguimientos.component';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitudEstado = ['En ruta', 'Completado'];
  
  constructor( private _brigadistaService: BrigadistaService,
    private dialog:MatDialog) { }

  ngOnInit() {
  }

  Enviar(){
    const config = new MatDialogConfig();
    config.disableClose = true;
    config.autoFocus = true;
    config.width = "200%";
    this.dialog.open(SeguimientosComponent,config);
  }

  completar(){
    this._brigadistaService.updateEmpleado();
    this._brigadistaService.updateSolicitud();
    this._brigadistaService.SolicitudForm.reset();
    this._brigadistaService.dataSourceDetalle.data = [];
  }

  Cancelar(){

  }
}
