import { RutaSolicitud } from '../Models/ruta-solicitud';
import { DetalleCotizacion } from '../Models/detalle-cotizacion';
import { CotizacionesDTO } from './cotizaciones-dto';
import { SeccionDTO } from './seccion-dto';
import { RutaSolicitudDTO } from './ruta-solicitud-dto';
import { SeguimientosDTO } from './seguimientos-dto';

export interface SolicitudDTO {

    solicitudId:number 
    descripcion:string 
    direccionSolicitud:string 
    sector:string 
    fecha:Date 
    estado :string
    tipoSolicitud:string  
    cotizaciones: CotizacionesDTO 
    seccion:SeccionDTO  
    rutaSolicitud:RutaSolicitudDTO[] 
    seguimientos: SeguimientosDTO[]
   
}
