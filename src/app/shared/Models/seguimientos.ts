import { Solicitud } from './solicitud'

export class Seguimientos {
    
    idSeguimientos:number 
    seguimiento:string 
    idSolicitud:number
    fechaSeguimiento:Date
    idEmpleado:number
    IdSolicitudNavigation: Solicitud
}
