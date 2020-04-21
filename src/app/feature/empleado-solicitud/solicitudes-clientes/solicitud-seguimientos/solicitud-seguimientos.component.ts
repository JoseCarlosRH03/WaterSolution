import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SeguimientosDTO } from 'src/app/shared/InterfaceDTO/seguimientos-dto';
import { ClienteSolicitudesService } from 'src/app/shared/Services/cliente-solicitudes.service';
import { NotificationServiceService } from 'src/app/shared/Services/notification-service.service';
import { LoginService } from 'src/app/shared/Services/login.service';

@Component({
  selector: 'app-solicitud-seguimientos',
  templateUrl: './solicitud-seguimientos.component.html',
  styleUrls: ['./solicitud-seguimientos.component.css']
})
export class SolicitudSeguimientosComponent implements OnInit {

  displayedColumns: string[] = 
  ['fecha', 'seguimiento', 'nombre', 'apellido'];
  
  dataSource = new MatTableDataSource<SeguimientosDTO>() ;
 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( 
    private _clienteService: ClienteSolicitudesService, 
    private _notification: NotificationServiceService,
    private _user: LoginService
    ) {
    
    this._clienteService.cotizacion.subscribe( data =>{
      if(data !==null){
        this.dataSource.data = data.seguimientos;
      }
    })

    this._clienteService.seguimientoForm.patchValue({
      fechaSeguimiento: new Date()
    })
   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  Enviar(){
    this._clienteService.seguimientoForm.patchValue({
      idSolicitud: this._clienteService.idSolicitud, 
      idEmpleado: this._user.UsuarioVal.idEmpleado
    })

    if(this._clienteService.seguimientoForm.valid){
      this._clienteService.setSeguimiento$(this._clienteService.seguimientoForm.value).subscribe( data =>{
        this.dataSource.data = data;
        this._clienteService.getSolicitudesCliente$(this._clienteService.idPersona).subscribe(data =>{
          this._clienteService.listSolicitudesDTO.emit(data);
          this._notification.warn('Su seguimiento sea guardado correctamente')
        })
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
  }
}
