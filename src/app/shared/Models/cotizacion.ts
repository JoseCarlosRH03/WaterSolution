import { Solicitud } from './solicitud';
import { DetalleCotizacion } from './detalle-cotizacion';

export interface Cotizacion {

     CotizacionId:number
     TotalCotizado: number
     FechaCotizacion: Date
     EstadoCotizacion: string
     SolicitudId:number 
     Solicitud: Solicitud 
     DetalleCotizacion:DetalleCotizacion 
}
