import { Cliente } from './cliente'
import { RutaSolicitud } from './ruta-solicitud'
import { Secciones } from './secciones'
import { Cotizacion } from './cotizacion'

export interface Solicitud {

    solicitudID:number 
    descripcion:string 
    direccionSolicitud:string 
    sector:string  
    fecha:Date 
    estado:boolean 
    tipoSolicitud: string   
    seccionID: number 
    personaId: number
    Persona:Cliente
    seccion:Secciones
    cotizaciones:Cotizacion[]
    RutaSolicitud:RutaSolicitud[]
}
