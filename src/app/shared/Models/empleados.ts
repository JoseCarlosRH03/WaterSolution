import { Usuarios } from './usuarios'


export interface Empleados {
    idEmpleado:number  
    nombreEmpleado:string 
    apellidosEmpleado:string
    cedulaEmpleado:string 
    fechaEmpleado:Date 
    telefonoEmpleado:number 
    direccionEmpleado:number
    cargoidCargo:number 
    seccionIdSeccion:number 
    usuario:Usuarios
}
