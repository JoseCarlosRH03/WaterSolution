import { PermisoRole } from '../Models/permiso-role'

export class EmpleadoDTO {
    idUsuario:number
    passwordUsuario:string
    estadoUsuario:boolean
    nombreUsuario: string
    idEmpleado:number
    nombreEmpleado: string
    apellidosEmpleado:string 
    cedulaEmpleado: string 
    fechaEmpleado: Date
    telefornoEmpleado: string
    direccionEmpleado: string
    nombreSeccion: string
    idSeccion:number
    nombreDepartamento:string
    idDepartamento: number
    nombreCargo:string
    idCargo:number
    nombreRole:string
    permiso:Array<PermisoRole>[] 
}
