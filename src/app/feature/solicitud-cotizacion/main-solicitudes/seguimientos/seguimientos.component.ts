import { Component, OnInit, ViewChild } from '@angular/core';
import { SeguimientosDTO } from 'src/app/shared/InterfaceDTO/seguimientos-dto';
import { MatTableDataSource, MatPaginator, MatSort, MatDialogRef } from '@angular/material';
import { ClienteSolicitudesService } from 'src/app/shared/Services/cliente-solicitudes.service';
import { NotificationServiceService } from 'src/app/shared/Services/notification-service.service';
import { LoginService } from 'src/app/shared/Services/login.service';
import { CotizacionSolicitudService } from 'src/app/shared/Services/cotizacion-solicitud.service';

@Component({
  selector: 'app-seguimientos',
  templateUrl: './seguimientos.component.html',
  styleUrls: ['./seguimientos.component.css']
})
export class SeguimientosComponent implements OnInit {

  displayedColumns: string[] = 
  ['fecha', 'seguimiento', 'nombre', 'apellido'];
  
  dataSource = new MatTableDataSource<SeguimientosDTO>() ;
 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( 
    private _clienteService: ClienteSolicitudesService,
    private _cotizacionService: CotizacionSolicitudService, 
    private _notification: NotificationServiceService,
    private dialogRef:MatDialogRef<SeguimientosComponent>,
    private _user: LoginService
    ) {
      
    this._clienteService.seguimientoForm.patchValue({
      fechaSeguimiento: new Date()
    })
   }

  ngOnInit() {
    this._cotizacionService.dataSourceSeguimientos.paginator = this.paginator;
    this._cotizacionService.dataSourceSeguimientos.sort = this.sort;
  }

  Enviar(){
    this._clienteService.seguimientoForm.patchValue({
      idSolicitud: this._cotizacionService.idSolicitud, 
      idEmpleado: this._user.UsuarioVal.idEmpleado
    })

    if(this._clienteService.seguimientoForm.valid){
      console.log(this._clienteService.seguimientoForm.value)
      this._clienteService.setSeguimiento$(this._clienteService.seguimientoForm.value).subscribe( data =>{
        this._cotizacionService.dataSourceSeguimientos.data = data;
        this._cotizacionService.dataSourceSeguimientos._updateChangeSubscription();
        this._notification.warn('Su seguimiento sea guardado correctamente')
      })
      this.Cancelar()
    }else{
      this._notification.warn('Verificar que todo está correcto')
      console.log("formulario",this._clienteService.seguimientoForm.value)
    }
    
  }

  Cancelar(){
    this._clienteService.resetSeguimientoForm();
    this._clienteService.seguimientoForm.patchValue({
      fechaSeguimiento: new Date()
    })
    this._cotizacionService.getSolicitud();
  }


  cerrarForm(){
    this.dialogRef.close();
    this._cotizacionService.getSolicitud();
  }
}
