import { PermisoRole } from './permiso-role'


export class Roles {
    public  IdRole:number 
    public  NombreRole:string
    public  EstadoRole:Blob

    public Secciones: Array<PermisoRole>[]
}
