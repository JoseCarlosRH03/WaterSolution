import { Injectable, EventEmitter } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { EmpleadoServiceService } from './empleado-service.service';
import { SolicitudDTO } from '../InterfaceDTO/solicitud-dto';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Empleados } from '../Models/empleados';
import { Solicitud } from '../Models/solicitud';
import { Ruta } from '../Models/ruta';
import { RutaSolicitud } from '../Models/ruta-solicitud';

@Injectable({
  providedIn: 'root'
})
export class RutaServicesService {
  private SolicitudURL = `https://localhost:44329/api/Solicitud`;
  private EmpleadosURL = `https://localhost:44329/api/Empleado`;
  private RutaURL = `https://localhost:44329/api/Ruta`;
  listSolicitudesDTO:  EventEmitter<SolicitudDTO[]> = new EventEmitter();
  solicitudEstado = ['Pendiente por Ruta', 'En ruta','cancelado', 'Completado'];
  tipoSolicitud =['Instalacion', 'Reparacion', 'Cotizacion'];
  selected = '';
  brigadistas: Empleados[] = [];

  constructor(private user: LoginService,private _http: HttpClient, private _EmpleadoService:EmpleadoServiceService) { 

    
  }


  getSolicitud(){
    this.getSolicitudesDepartamento$(this.user.UsuarioVal.idSeccion).subscribe( data=>{
      this.listSolicitudesDTO.emit(data);
    })
  }

  getBgrigadistas(){
    this.getBrigadistas$(this.user.UsuarioVal.idSeccion).subscribe( data=>{
      this.brigadistas = data
    })
  }
  getSolicitudesDepartamento$(id:number):Observable<SolicitudDTO[]>{
    return  this._http.get<SolicitudDTO[]>(`${this.SolicitudURL}/RutaSolicitud/${id}`);
  }

  getBrigadistas$(id:number):Observable<Empleados[]>{
    return  this._http.get<Empleados[]>(`${this.EmpleadosURL}/Brigadistas/${id}`);
  }

  upDateSolicidud$(solicitud:SolicitudDTO):Observable<SolicitudDTO>{
    return  this._http.put<SolicitudDTO>(`${this.SolicitudURL}/${solicitud.solicitudId}`,solicitud);
  }

  upDateEmpleado$(data:Empleados):Observable<Empleados>{
    return   this._http.put<Empleados>(`${this.EmpleadosURL}/${data.idEmpleado}`,data);
  }

  setRuta$(data:Ruta):Observable<Ruta>{
    return   this._http.post<Ruta>(`${this.RutaURL}`,data);
  }

  setRutaSolicitud$(data:RutaSolicitud):Observable<RutaSolicitud>{
    return   this._http.post<RutaSolicitud>(`${this.RutaURL}/RutaSolicitud`,data);
  }

  SolicitudForm: FormGroup  = new FormGroup({
    solicitudId: new FormControl(0),
    descripcion:  new FormControl('', Validators.required),//
    direccionSolicitud:  new FormControl('', Validators.required),//
    sector: new FormControl('', Validators.required),//
    fecha:  new FormControl('', Validators.required),//
    estado: new FormControl('', Validators.required),
    tipoSolicitud:  new FormControl('', Validators.required),
    seccionId:  new FormControl(0, Validators.required),
    personaId:  new FormControl(0, Validators.required),
  })

  updateSolicitudesForm(row){
    this.SolicitudForm.setValue({
      solicitudId: row.solicitudId,
      descripcion: row.descripcion,
      direccionSolicitud: row.direccionSolicitud,
      sector: row.sector,
      fecha: row.fecha,
      estado: row.estado,
      tipoSolicitud: row.tipoSolicitud,
      seccionId:row.seccionId,
      personaId:row.personaId,
    })
  }

  resetSolicitudesForm(){
    this.SolicitudForm.setValue({
      solicitudId: 0,
      descripcion:'',
      direccionSolicitud:'',
      sector: '',
      fecha:'',
      estado:'',
      tipoSolicitud: '',
      seccionId:0,
      personaId:0,
    })
  }
  
}
