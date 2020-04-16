import { RutaSolicitud } from './ruta-solicitud';
import { DetalleCotizacion } from './detalle-cotizacion';

export interface SolicitudDTO {

    personaId: number
    solicitudID:number 
    descripcion:string 
    direccionSolicitud:string 
    sector:string  
    fechaSolicitud:Date 
    estado:boolean 
    tipoSolicitud: string   
    seccionID: number 
    totalCotizado:number
    fechaCotizacion:Date
    estadoCotizacion: string
    cotizacionID: number
    listaRuta: RutaSolicitud[] 
    listaCotizaciones: DetalleCotizacion[] 
   
}
