import { Component, OnInit } from '@angular/core';
import { ClienteSolicitudesService } from 'src/app/shared/Services/cliente-solicitudes.service';
import { NotificationServiceService } from 'src/app/shared/Services/notification-service.service';
import { CotizacionSolicitudService } from 'src/app/shared/Services/cotizacion-solicitud.service';
import { MainDetalleComponent } from '../../main-detalle/main-detalle.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { SolicitudSeguimientosComponent } from 'src/app/feature/empleado-solicitud/solicitudes-clientes/solicitud-seguimientos/solicitud-seguimientos.component';
import { SeguimientosComponent } from '../seguimientos/seguimientos.component';

@Component({
  selector: 'app-fomr-solisitudes',
  templateUrl: './fomr-solisitudes.component.html',
  styleUrls: ['./fomr-solisitudes.component.css']
})
export class FomrSolisitudesComponent implements OnInit {

  constructor(private _clienteService:ClienteSolicitudesService ,
    private _cotizacionSolicitud: CotizacionSolicitudService,
    private _Notification: NotificationServiceService,  
    private dialog:MatDialog,
    ) {
      this._cotizacionSolicitud.resetSolicitudesForm()
      this._cotizacionSolicitud.selected = '';
      this._cotizacionSolicitud.setFom();
  }

  ngOnInit() {
  }

  Change(secciones){
    this._cotizacionSolicitud.secciones = secciones
  }
  
  Enviar(){
    if(this._cotizacionSolicitud.idSolicitud !== 0){
      const config = new MatDialogConfig();
      config.disableClose = true;
      config.autoFocus = true;
      config.width = "200%";
      this.dialog.open(SeguimientosComponent,config);
    }else{
      this._Notification.warn('No ha seleccionado ninguna solicitud')
    }
  }

  Cotizacion(){
    
    if(this._cotizacionSolicitud.idSolicitud !== 0){
      const config = new MatDialogConfig();
      config.disableClose = true;
      config.autoFocus = true;
      config.width = "200%";
      this.dialog.open(MainDetalleComponent,config);
    }else{
      this._Notification.warn('No ha seleccionado ninguna solicitud')
    }
    
  }

  Cancelar(){
    this._cotizacionSolicitud.resetSolicitudesForm();
    this._cotizacionSolicitud.selected = '';
    this._cotizacionSolicitud.idSolicitud = 0;
  }
}
