import { Cliente } from './cliente'
import { RutaSolicitud } from './ruta-solicitud'
import { Secciones } from './secciones'
import { Cotizacion } from './cotizacion'
import { Seguimientos } from './seguimientos'

export interface Solicitud {

    solicitudId:number 
    descripcion:string 
    direccionSolicitud:string 
    sector:string  
    fecha:Date 
    estado:string 
    tipoSolicitud: string   
    seccionId: number 
    personaId: number
    persona:Cliente
    seccion:Secciones
    cotizaciones:Cotizacion
    rutaSolicitud:RutaSolicitud[]
    seguimientos: Seguimientos[]

}
