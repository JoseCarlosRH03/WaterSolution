import { DetalleCotizacionDTO } from '../InterfaceDTO/detalle-cotizacion-dto';

export class CotizacionesDTO {

    constructor
    (
     cotizacionId: number,
     totalCotizado: number,
     fechaCotizacion: Date,
     estadoCotizacion: string,
     solicitudId:number
    ){
      this.cotizacionId = cotizacionId
      this.totalCotizado =totalCotizado 
      this.fechaCotizacion =fechaCotizacion 
      this.estadoCotizacion = estadoCotizacion 
      this.solicitudId =  solicitudId
    }
    cotizacionId:number
    totalCotizado:number 
    fechaCotizacion:Date 
    estadoCotizacion:string 
    solicitudId:number
    detalleCotizacion:DetalleCotizacionDTO[]  
}
