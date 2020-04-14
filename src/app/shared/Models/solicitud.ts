import { Cliente } from './cliente'

export class Solicitud {

    SolicitudId:number 
    Descripcion:string 
    DireccionSolicitud:string 
    Sector:string  
    Fecha:Date 
    Estado:boolean 
    TipoSolicitud: string   
    SeccionId: number 
    PersonaId: number

    Persona:Cliente
   // Cotizaciones: Cotizaciones[] 
   // RutaSolicitud: RutaSolicitud[] 



}
