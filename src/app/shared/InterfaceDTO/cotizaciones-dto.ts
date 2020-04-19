import { DetalleCotizacionDTO } from '../InterfaceDTO/detalle-cotizacion-dto';

export interface CotizacionesDTO {
    totalCotizado:number 
    techaCotizacion:Date 
    tstadoCotizacion:string 
    detalleCotizacion:DetalleCotizacionDTO[]  
}
