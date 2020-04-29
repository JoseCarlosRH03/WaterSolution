import { Ruta } from './ruta';

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
}
