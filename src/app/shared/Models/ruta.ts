import { Empleados } from './empleados'

export class Ruta {

    constructor(  rutaId:number, fecha:Date, idEmpleado:number){
        this.rutaId = rutaId
        this.fecha = fecha
        this.idEmpleado = idEmpleado
    }

    rutaId:number
    fecha:Date
    idEmpleado:number
    empleadoRuta:Empleados
   

}
