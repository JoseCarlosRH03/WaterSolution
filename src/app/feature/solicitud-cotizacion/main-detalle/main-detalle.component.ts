import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CotizacionSolicitudService } from 'src/app/shared/Services/cotizacion-solicitud.service';
import { CotizacionesDTO } from 'src/app/shared/InterfaceDTO/cotizaciones-dto';
import { NotificationServiceService } from 'src/app/shared/Services/notification-service.service';

@Component({
  selector: 'app-main-detalle',
  templateUrl: './main-detalle.component.html',
  styleUrls: ['./main-detalle.component.css']
})
export class MainDetalleComponent implements OnInit {
  estados = ['completado','proceso' ]
  fechacotizacion: Date
  totalCotizado: number
 public id = 0
  cotizacionid: number = 0;
  constructor(
    private dialogRef:MatDialogRef<MainDetalleComponent>,
    private _CotizacionServices: CotizacionSolicitudService,
    private _Notification: NotificationServiceService
  )
  { 
    
  }

  ngOnInit() {
  }

  cerrarForm(){
    this._CotizacionServices.resetDetalleFormMaterial();
    this._CotizacionServices.dataSourceMaterial.data = [];
    this._CotizacionServices.resetSolicitudesForm();
    this._CotizacionServices.selected = '';
    this._CotizacionServices.cotizacion = new CotizacionesDTO(0,0, new Date(),'proceso',0);
    this._CotizacionServices.dataSourceDetalle.data = []; 
    this._CotizacionServices.detalleDelete = [];
    this._CotizacionServices.idSolicitud = 0;
    this._CotizacionServices.solicitud = null
    this._CotizacionServices.getSolicitud();
    this.dialogRef.close();
  }

  Enviar(){
    this._CotizacionServices.dataSourceDetalle.data.forEach(element => {

      if(element.detalleCotizacionId !==0){
        element.material = null;
        this._CotizacionServices.actualizar.push(element);
      }else{
        element.material = null;
        this._CotizacionServices.agregar.push(element);
      }
    });

    if( this._CotizacionServices.cotizacion.estadoCotizacion === 'completado'){
      this._CotizacionServices.solicitud.estado = 'Pendiente de Pago'
    }else{
      this._CotizacionServices.solicitud.estado = 'En cotizacion'
    }

    if( this._CotizacionServices.cotizacion.cotizacionId === 0)
    {
    
      this._CotizacionServices.setCotizacion$(this._CotizacionServices.cotizacion)
      .subscribe( val =>{ 

        this.updateSolicitud()

        this._CotizacionServices.agregar.forEach(element => {
          element.cotizacionId = val.cotizacionId;
        });

        this.addDetallesa()
        this._Notification.success("Todo ha sido guardado correctamente")
      })
    }else{
      this._CotizacionServices.upCotizacion$(this._CotizacionServices.cotizacion).subscribe( val =>{})
      this.updateSolicitud();
      this.addDetallesa();
      this.deleteDetalle();
      this.updateDetallesa();
      this._Notification.success("Todo ha sido guardado correctamente")
    }
  }

  updateSolicitud(){
    this._CotizacionServices.upDateSolicitud$( this._CotizacionServices.solicitud)
    .subscribe( valor =>{});
  }


  deleteDetalle(){
    if(this._CotizacionServices.detalleDelete.length > 0){
      this._CotizacionServices.DeletDetalleCotizacion$(this._CotizacionServices.detalleDelete)
      .subscribe( datos2 =>{
      })
      this._CotizacionServices.detalleDelete = []
    }
  }

  addDetallesa(){
    if(this._CotizacionServices.agregar.length > 0){
      this._CotizacionServices.setDetalleCotizacion$(this._CotizacionServices.agregar).subscribe( datos2 =>{
      })
      this._CotizacionServices.agregar = [];
    }
  }

  updateDetallesa(){
    if(this._CotizacionServices.actualizar.length > 0){
      console.log(this._CotizacionServices.actualizar)
      this._CotizacionServices.upDetalleCotizacion$(this._CotizacionServices.actualizar).subscribe( datos2 =>{
      }) 
      this._CotizacionServices.actualizar = [];
    }
  }

}
