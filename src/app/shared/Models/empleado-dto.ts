import { PermisoRole } from './permiso-role'

export class EmpleadoDTO {
    nombreUsuario: string
    nombreEmpleado: string
    apellidosEmpleado:string 
    cedulaEmpleado: string 
    fechaEmpleado: Date
    telefornoEmpleado: string
    direccionEmpleado: string
    nombreSeccion: string
    nombreDepartamento:string
    nombreCargo:string
    nombreRole:string
    permiso:Array<PermisoRole>[] 
}
