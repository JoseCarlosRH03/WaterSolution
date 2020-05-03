import { Ruta } from './ruta';
import { Solicitud } from './solicitud';
import { Seguimientos } from './seguimientos';

export class RutaSolicitud {

    constructor(  rutaSolicitudId:number, solicitudId:number, rutaId:number){
      this.rutaSolicitudId = rutaSolicitudId
      this.solicitudId = solicitudId
      this.rutaId = rutaId
    }

    rutaSolicitudId:number
    solicitudId:number
    rutaId:number
    ruta:Ruta
    solicitud: Solicitud
    
}
