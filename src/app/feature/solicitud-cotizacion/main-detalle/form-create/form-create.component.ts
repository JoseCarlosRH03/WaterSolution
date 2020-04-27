import { Component, OnInit } from '@angular/core';
import { CotizacionSolicitudService } from 'src/app/shared/Services/cotizacion-solicitud.service';
import { MatTableDataSource } from '@angular/material';
import { Material } from 'src/app/shared/Models/material';
import { NotificationServiceService } from 'src/app/shared/Services/notification-service.service';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {

  constructor(private _cotizacionService: CotizacionSolicitudService, private _notificacion: NotificationServiceService) { }

  ngOnInit() {}

  Enviar(){
      var valor = this._cotizacionService.detalleForm.value
    if(valor.cantidad > 0  && valor.presio > 0 && valor.material.nombre !== ''){
      if(this._cotizacionService.botonAddEdit){
        if(this._cotizacionService.detalleForm.get('detalleCotizacionId').value === 0){

          if(this._cotizacionService.detalleDelete.length > 0){
            valor.detalleCotizacionId = this._cotizacionService.detalleDelete[0].detalleCotizacionId
            this._cotizacionService.detalleDelete.splice(0,1)
          }

          // agregar
          this._cotizacionService.dataSourceDetalle.data.push(valor);
          this._cotizacionService.dataSourceDetalle._updateChangeSubscription();
          //eliminar 
          var elemento =  this._cotizacionService.dataSourceMaterial.data.map( material => material.materialId)
          .indexOf(this._cotizacionService.detalleForm.get('materialId').value);
          this._cotizacionService.dataSourceMaterial.data.splice( elemento,1)
          this._cotizacionService.dataSourceMaterial._updateChangeSubscription();
        }
      }else{
       var idice = this._cotizacionService.dataSourceDetalle.data.map( material => material.materialId)
          .indexOf(this._cotizacionService.detalleForm.get('materialId').value);  
         this._cotizacionService.dataSourceDetalle.data[idice] = this._cotizacionService.detalleForm.value;
         this._cotizacionService.dataSourceDetalle._updateChangeSubscription()
      }
      this._cotizacionService.Total()
      this._cotizacionService.resetDetalleFormMaterial();
    }else{
     this._notificacion.warn("verifique que todo este correcto")
    }

  }

  calcular(filterValue: string){
    var cantidad = Number.parseFloat(this._cotizacionService.detalleForm.get('cantidad').value); 
    var precio = Number.parseFloat(this._cotizacionService.detalleForm.get('presio').value);
    var total = precio * cantidad
   if(isNaN(total)){
      total = 0
    }

    this._cotizacionService.detalleForm.patchValue({
      totalDetalle: total
    })
  }

  Cancelar(){
    this._cotizacionService.resetDetalleFormMaterial();
  }
  

}
