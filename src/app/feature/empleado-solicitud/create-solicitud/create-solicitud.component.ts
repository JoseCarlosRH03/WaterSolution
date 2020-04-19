import { Component, OnInit } from '@angular/core';
import { ClienteSolicitudesService } from 'src/app/shared/Services/cliente-solicitudes.service';
import { NotificationServiceService } from 'src/app/shared/Services/notification-service.service';
import { MatDialogRef } from '@angular/material';


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
        console.log('formulario crear', this._clienteService.SolicitudForm.value)
      }else{
        console.log('formulario update', this._clienteService.SolicitudForm.value)
      }
      
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
  }
}
