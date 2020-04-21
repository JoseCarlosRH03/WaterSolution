import { Injectable, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cliente } from '../Models/cliente';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { SolicitudDTO } from '../InterfaceDTO/solicitud-dto';
import { Solicitud } from '../Models/solicitud';
import { CotizacionesDTO } from '../InterfaceDTO/cotizaciones-dto';
import { Departamentos } from '../Models/departamentos';
import { Secciones } from '../Models/secciones';
import { EmpleadoServiceService } from './empleado-service.service';
import { Seguimientos } from '../Models/seguimientos';
import { SeguimientosDTO } from '../InterfaceDTO/seguimientos-dto';


@Injectable({
  providedIn: 'root'
})
export class ClienteSolicitudesService {
  private URL = `https://localhost:44329/api/Cliente`;
  private SolicitudURL = `https://localhost:44329/api/Solicitud`;
  listclienteData:  EventEmitter<Cliente[]> = new EventEmitter()
  listSolicitudesDTO:  EventEmitter<SolicitudDTO[]> = new EventEmitter()
  cotizacion: EventEmitter<SolicitudDTO> = new EventEmitter();
  Departamentos:Departamentos[] = [];
  secciones:Secciones[] = [];
  idDepartamento = '';
  solicitudEstado = ['Pendiente por Ruta', 'En ruta','cancelado', 'En cotizacion', 'Completado', 'Pendiente de Pago', 'Pendiente por Cotizacion'];
  tipoSolicitud =['Instalacion', 'Reparacion', 'Cotizacion'];
  idPersona = 0;
  selected = '';
  dep = '';
  idSolicitud = 0;
  constructor( private _http: HttpClient,private _EmpleadoService:EmpleadoServiceService) { 

   this.starList()
  
  }
 
  saveCliente$(data):Observable<Cliente>{
    return  this._http.post<Cliente>(`${this.URL}/Save`,data);
  }

  listClientes$():Observable<Cliente[]>{
    return  this._http.get<Cliente[]>(`${this.URL}`);
  }

  getSolicitudesCliente$(id:number):Observable<SolicitudDTO[]>{
    return  this._http.get<SolicitudDTO[]>(`${this.URL}/MostrarClientes/${id}`);
  }

  setSolicitud$(data:Solicitud):Observable<Solicitud>{
    return this._http.post<Solicitud>(`${this.SolicitudURL}`,data);
  } 

  upDateSolicitud$(data:Solicitud):Observable<Solicitud>{
    return   this._http.put<Solicitud>(`${this.SolicitudURL}/${data.solicitudId}`,data);
  }

  setSeguimiento$(data:Seguimientos):Observable<SeguimientosDTO[]>{
    return this._http.post<SeguimientosDTO[]>(`${this.SolicitudURL}/Sequimiento`,data);
  } 

  starList(){
    this.listClientes$().subscribe( data => {
      this.listclienteData.emit(data) ;
    })
  }

  setFom(){
    this._EmpleadoService.GetFormEmpleados$().subscribe(val => {
      this.Departamentos = val.departamentos;
    });  
  
    if(this.SolicitudForm.get('seccionId').value !== 0 ){
      var b = this.Departamentos.map( departamento => departamento.nombreDepartamento).indexOf(this.dep)
      this.selected =  this.Departamentos[b].idDepartamento.toString()
      this.secciones = this.Departamentos[b].secciones
      var d = this.secciones.map( secc => secc.idSeccion).indexOf(this.SolicitudForm.get('seccionId').value)
      this.SolicitudForm.patchValue({
        seccionId: this.secciones[d].idSeccion.toString()
      })
   }
  }


  seguimientoForm: FormGroup  = new FormGroup({
    idSeguimientos:new FormControl(0, Validators.required),
    seguimiento:new FormControl('', Validators.required),
    idSolicitud:new FormControl(0, Validators.required),
    idEmpleado:new FormControl(0, Validators.required),
    fechaSeguimiento:new FormControl('', Validators.required),
  })

  ClientesForm: FormGroup  = new FormGroup({
    personaId: new FormControl(0),
    nombre:  new FormControl('', Validators.required),
    apellidos:  new FormControl('', Validators.required),
    cedula: new FormControl('', Validators.required),
    direccion:  new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    fecha:  new FormControl('', Validators.required),
  })

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


  resetCliente(){
    this.ClientesForm.setValue({
    personaId: 0,
    nombre: '',
    apellidos: '', 
    cedula:'',
    direccion:'',  
    telefono:'',
    fecha:''
    })
  }


  setClienteForm(row){
   
    this.ClientesForm.setValue({
      personaId: row.personaId,
      nombre: row.nombre,
      apellidos:row.apellidos, 
      cedula:row.cedula,
      direccion:row.direccion,  
      telefono:row.telefono,
      fecha:row.fecha
      })
  }
  
  updateSolicitudesForm(row){
    this.idSolicitud = row.solicitudId;
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

  resetSeguimientoForm(){
    this.seguimientoForm.setValue({
    idSeguimientos:0,
    seguimiento:'',
    idSolicitud:0,
    idEmpleado:0,
    fechaSeguimiento:'',
    })
  }

}


