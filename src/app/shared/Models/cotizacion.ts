import { Solicitud } from './solicitud';
import { DetalleCotizacion } from './detalle-cotizacion';

export interface Cotizacion {

     cotizacionId:number
     totalCotizado: number
     fechaCotizacion: Date
     estadoCotizacion: string
     solicitudId:number 
     solicitud: Solicitud 
     detalleCotizacion:DetalleCotizacion[] 
}
