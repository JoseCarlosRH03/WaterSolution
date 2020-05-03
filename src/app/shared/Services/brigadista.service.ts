import { Injectable } from '@angular/core';
import { RutaSolicitudDTO } from '../InterfaceDTO/ruta-solicitud-dto';
import { Observable } from 'rxjs';
import { Empleados } from '../Models/empleados';
import { SolicitudDTO } from '../InterfaceDTO/solicitud-dto';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DetalleCotizacionDTO } from '../InterfaceDTO/detalle-cotizacion-dto';
import { MatTableDataSource } from '@angular/material';
import { RutaSolicitud } from '../Models/ruta-solicitud';
import { DetalleCotizacion } from '../Models/detalle-cotizacion';
import { CotizacionSolicitudService } from './cotizacion-solicitud.service';
import { SeguimientosDTO } from '../InterfaceDTO/seguimientos-dto';
import { ClienteSolicitudesService } from './cliente-solicitudes.service';
import { RutaServicesService } from './ruta-services.service';
import { Solicitud } from '../Models/solicitud';

@Injectable({
  providedIn: 'root'
})
export class BrigadistaService {

  
  private SolicitudURL = `https://localhost:44329/api/Solicitud`;
  private EmpleadosURL = `https://localhost:44329/api/Empleado`;
  private RutaURL = `https://localhost:44329/api/Ruta`;
  tipoSolicitud =['Instalacion', 'Reparacion', 'Cotizacion'];
  brigadistas: Empleados[] = [];
  dataSourceDetalle = new MatTableDataSource<DetalleCotizacion>();
  solicitud: Solicitud;
  empleado: Empleados
  constructor(
    private _user: LoginService,
    private _http: HttpClient,
    private _cotizacioservice: CotizacionSolicitudService,
    private _cotizacionService: CotizacionSolicitudService,
    private _rutaService:RutaServicesService
    ) { 
   
  }

  getRuta(){
    this.getRuta$(this._user.UsuarioVal.idEmpleado).subscribe( data=>{
      this.solicitud =data.solicitud;
      this.empleado = data.ruta.empleadoRuta;
      this.dataSourceDetalle.data = data.solicitud.cotizaciones.detalleCotizacion
      this.updateSolicitudesForm( data.solicitud)
      this.getSeguimientos$( data.solicitudId).subscribe( val =>{
        this._cotizacioservice.dataSourceSeguimientos.data = val;
        this._cotizacionService.idSolicitud = data.solicitudId
      })
       
    })
  }

 updateSolicitud(){
   this.SolicitudForm.patchValue({
    estado: 'completado'
   })  
  this._rutaService.upDateSolicidud$(this.SolicitudForm.value).subscribe( val =>{})
 }

 updateEmpleado(){
   this.empleado.estado = true
    this._rutaService.upDateEmpleado$(this.empleado).subscribe( val =>{})
 }
   
  getRuta$(id:number):Observable<RutaSolicitud>{
    return  this._http.get<RutaSolicitud>(`${this.RutaURL}/${id}`);
  }

  getSeguimientos$(id:number):Observable<SeguimientosDTO[]>{
    return  this._http.get<SeguimientosDTO[]>(`${this.RutaURL}/Seguimientos/${id}`);
  }
  
  

  upDateSolicidud$(solicitud:SolicitudDTO):Observable<SolicitudDTO>{
    return  this._http.put<SolicitudDTO>(`${this.SolicitudURL}/${solicitud.solicitudId}`,solicitud);
  }

  upDateEmpleado$(data:Empleados):Observable<Empleados>{
    return   this._http.put<Empleados>(`${this.EmpleadosURL}/${data.idEmpleado}`,data);
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
