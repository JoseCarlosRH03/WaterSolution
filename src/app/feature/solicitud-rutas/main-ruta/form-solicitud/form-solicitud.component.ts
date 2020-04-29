import { Component, OnInit } from '@angular/core';
import { RutaServicesService } from 'src/app/shared/Services/ruta-services.service';
import { Empleados } from 'src/app/shared/Models/empleados';
import { RutaSolicitud } from 'src/app/shared/Models/ruta-solicitud';
import { Ruta } from 'src/app/shared/Models/ruta';
import { NotificationServiceService } from 'src/app/shared/Services/notification-service.service';

@Component({
  selector: 'app-form-solicitud',
  templateUrl: './form-solicitud.component.html',
  styleUrls: ['./form-solicitud.component.css']
})
export class FormSolicitudComponent implements OnInit {

  brigadista: Empleados;
  rutaSolicitud:RutaSolicitud
  ruta:Ruta

  constructor(private _rutaServices:RutaServicesService, private _notificationservice: NotificationServiceService) {

    this._rutaServices.getBgrigadistas();

   }

  ngOnInit() {
  }

  Cancelar(){
    this._rutaServices.resetSolicitudesForm();
    this._rutaServices.selected = '';
  }

  Change(brigadista){
    this.brigadista = brigadista;
  }

  Enviar(){

    if(this._rutaServices.selected !== '' && this._rutaServices.SolicitudForm.valid){
      this._rutaServices.SolicitudForm.patchValue({
        estado:'En ruta'
      })
  
      this._rutaServices. upDateSolicidud$( this._rutaServices.SolicitudForm.value).subscribe(data =>{})
  
      this.brigadista.estado = false;
      this._rutaServices.upDateEmpleado$(this.brigadista).subscribe( data =>{})
      console.log(this.brigadista.idEmpleado);
      this.ruta = new Ruta(0,new Date(),  this.brigadista.idEmpleado);
      console.log(this.ruta)
      this._rutaServices.setRuta$(this.ruta).subscribe( val =>{
        this.rutaSolicitud = new RutaSolicitud(0,this._rutaServices.SolicitudForm
        .get('solicitudId').value,val.rutaId);
  
        this._rutaServices.setRutaSolicitud$(this.rutaSolicitud).subscribe( val =>{

          this.Cancelar();
          this._rutaServices.getBgrigadistas();
          this._rutaServices.getSolicitud();
          this._notificationservice.success('la ruta fue creada correctamente')
        })
      })
     
    }else{
      this._notificationservice.warn('confirmar que todo está correcto')
    }
   
  }
}
