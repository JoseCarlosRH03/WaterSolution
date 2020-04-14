import { Component, OnInit } from '@angular/core';
import { ClienteSolicitudesService } from 'src/app/shared/Services/cliente-solicitudes.service';
import { NotificationServiceService } from 'src/app/shared/Services/notification-service.service';
import { Departamentos } from 'src/app/shared/Models/departamentos';
import { Secciones } from 'src/app/shared/Models/secciones';
import { EmpleadoServiceService } from 'src/app/shared/Services/empleado-service.service';

@Component({
  selector: 'app-create-solicitud',
  templateUrl: './create-solicitud.component.html',
  styleUrls: ['./create-solicitud.component.css']
})
export class CreateSolicitudComponent implements OnInit {

  Departamentos:Departamentos[] = [];
  secciones:Secciones[] = [];

  constructor(private _clienteService:ClienteSolicitudesService ,private _Notification: NotificationServiceService,  private _EmpleadoService: EmpleadoServiceService) {

    this._EmpleadoService.GetFormEmpleados$().subscribe(val => {
      this.Departamentos = val.departamentos;
    });  
   }

  ngOnInit() {
    this._clienteService.SolicitudForm.patchValue({
      Fecha:  new Date()
    })
  }

  Enviar(){
    if(this._clienteService.ClientesForm.invalid){
      this._Notification.warn('Verifique que todos los datos estén correcto');
    }else{
      //this._clienteService.saveCliente$(this._clienteService.ClientesForm.value)
    }
    
  }

  
  Cancelar(){
    this._clienteService.SolicitudForm.reset();
    this._clienteService.SolicitudForm.patchValue({
      Fecha:  new Date()
    })
  }

  Change(secciones){
    this.secciones = secciones
  }
}
