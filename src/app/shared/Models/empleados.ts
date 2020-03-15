import { Cargo } from './cargo'
import { Secciones } from './secciones'
import { Usuarios } from './usuarios'
import { Ruta } from './ruta'


export class Empleados {
    public IdEmpleado:number  
    public NombreEmpleado:string 
    public ApellidosEmpleado:string
    public CedulaEmpleado:string 
    public FechaEmpleado:Date 
    public TelefonoEmpleado:number 
    public DireccionEmpleado:number
    public CargoidCargo:number 
    public SeccionIdSeccion:number 

    public Secciones: Array<Secciones>[]
    public Cargo:Cargo
    public RutaEmpleado:Array<Ruta>[] 
    public  Usuario:Usuarios 
}
