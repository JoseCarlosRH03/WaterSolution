import { Component, OnInit } from '@angular/core';
import { ClienteSolicitudesService } from 'src/app/shared/Services/cliente-solicitudes.service';
import { NotificationServiceService } from 'src/app/shared/Services/notification-service.service';



@Component({
  selector: 'app-create-solicitud',
  templateUrl: './create-solicitud.component.html',
  styleUrls: ['./create-solicitud.component.css']
})
export class CreateSolicitudComponent implements OnInit {

 
  constructor(private _clienteService:ClienteSolicitudesService ,
    private _Notification: NotificationServiceService,  
    ) {
      this._clienteService.setFom();
      this._clienteService.SolicitudForm.patchValue({
        fecha:  new Date()
      })
  }

  ngOnInit() {
    this._clienteService.SolicitudForm.patchValue({
      fecha:  new Date()
    })
  }

  Enviar(){
    if(this._clienteService.SolicitudForm.invalid){
      this._Notification.warn('Verifique que todos los datos estén correcto');
    }else{
      if(this._clienteService.SolicitudForm.get('solicitudId').value === 0){
      this._clienteService.SolicitudForm.patchValue({
        personaId:this._clienteService.idPersona
      })
        this._clienteService.setSolicitud$(this._clienteService.SolicitudForm.value)
        .subscribe(val =>{
          this._clienteService.getSolicitudesCliente$(val.personaId).subscribe( data =>{
            this._clienteService.listSolicitudesDTO.emit(data)
          })
          this._Notification.success('Solicitud Creada Correctamente')
        })
      }else{
        this._clienteService.upDateSolicitud$(this._clienteService.SolicitudForm.value)
        .subscribe(val =>{
          this._clienteService.getSolicitudesCliente$(val.personaId).subscribe( data =>{
            this._clienteService.listSolicitudesDTO.emit(data)
          })
          this._Notification.success('Solicitud Actualizada Correctamente')
        })
      }
      this.cerrarForm()
    }
    
  }

  
  Cancelar(){
    this.cerrarForm()
    
  }

  Change(secciones){
    this._clienteService.secciones = secciones
  }

  cerrarForm(){
    this._clienteService.resetSolicitudesForm();
    this._clienteService.SolicitudForm.patchValue({
      fecha:  new Date()
    })
    this._clienteService.selected = '';
    this._clienteService.cotizacion.emit(null)
  }
}
