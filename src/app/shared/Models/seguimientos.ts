import { Solicitud } from './solicitud'

export class Seguimientos {
    
    IdSeguimientos:number 
    Seguimiento:string 
    IdSolicitud:number
    Fecha:Date

    IdSolicitudNavigation: Solicitud
}
