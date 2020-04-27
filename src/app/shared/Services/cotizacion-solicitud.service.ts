import { Injectable, EventEmitter } from '@angular/core';
import { LoginService } from './login.service';
import { SolicitudDTO } from '../InterfaceDTO/solicitud-dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Material } from '../Models/material';
import { DetalleCotizacionDTO } from '../InterfaceDTO/detalle-cotizacion-dto';
import { EmpleadoServiceService } from './empleado-service.service';
import { Departamentos } from '../Models/departamentos';
import { Secciones } from '../Models/secciones';
import { MatTableDataSource } from '@angular/material';
import { CotizacionesDTO } from '../InterfaceDTO/cotizaciones-dto';
import { SeguimientosDTO } from '../InterfaceDTO/seguimientos-dto';
import { Solicitud } from '../Models/solicitud';

@Injectable({
  providedIn: 'root'
})

export class CotizacionSolicitudService {
  private SolicitudURL = `https://localhost:44329/api/Solicitud`;
  private materialesURL = `https://localhost:44329/api/Material`;
  private CotizacionURL = `https://localhost:44329/api/Cotizacione`;
  private DetalleURL = `https://localhost:44329/api/DetalleCotizacion`;
  listSolicitudesDTO:  EventEmitter<SolicitudDTO[]> = new EventEmitter();
  solicitud:SolicitudDTO;
  dataSourceMaterial = new MatTableDataSource<Material>();
  dataSourceDetalle = new MatTableDataSource<DetalleCotizacionDTO>();
  dataSourceSeguimientos = new MatTableDataSource<SeguimientosDTO>() ;
  cotizacion: CotizacionesDTO;
  Departamentos:Departamentos[] = [];
  secciones:Secciones[] = [];
  actualizar:DetalleCotizacionDTO[] = []
  agregar:DetalleCotizacionDTO[] = []
  idDepartamento = '';
  solicitudEstado = ['Pendiente por Ruta', 'En ruta','cancelado', 'En cotizacion', 'Completado', 'Pendiente de Pago', 'Pendiente por Cotizacion'];
  tipoSolicitud =['Instalacion', 'Reparacion', 'Cotizacion'];
  idPersona = 0;
  selected = '';
  dep = '';
  idSolicitud = 0;
  idcotizacion:  number =0;
  botonAddEdit = true;
  detalleDelete: DetalleCotizacionDTO[] = [];

  constructor(private user: LoginService,private _http: HttpClient, private _EmpleadoService:EmpleadoServiceService) {

   
  }

 
  Total(){
    this.cotizacion.totalCotizado = 0;
    this.dataSourceDetalle.data.forEach(element => {
      this.cotizacion.totalCotizado += element.totalDetalle
    });
  }

  getSolicitud(){
    this.getSolicitudesDepartamento$(this.user.UsuarioVal.idSeccion).subscribe( data=>{
      this.listSolicitudesDTO.emit(data);
    })
  }

 

  getSolicitudesDepartamento$(id:number):Observable<SolicitudDTO[]>{
    return  this._http.get<SolicitudDTO[]>(`${this.SolicitudURL}/MostrarSolicitudes/${id}`);
  }

  getMaterialesFaltantes(id:number ):Observable<Material[]>{
    return this._http.get<Material[]>(`${this.materialesURL}/Materiales/${id}`);
  }

  setCotizacion$(data:CotizacionesDTO ):Observable<CotizacionesDTO>{
    return  this._http.post<CotizacionesDTO>(`${this.CotizacionURL}/save`,data);
  }

  upCotizacion$(data:CotizacionesDTO):Observable<CotizacionesDTO>{
    return this._http.put<CotizacionesDTO>(`${this.CotizacionURL}/Edit`,data);
  } 

  setDetalleCotizacion$(data:DetalleCotizacionDTO[] ):Observable<DetalleCotizacionDTO[]>{
    return  this._http.post<DetalleCotizacionDTO[]>(`${this.DetalleURL}/save`,data);
  }

  DeletDetalleCotizacion$(data:DetalleCotizacionDTO[]):Observable<DetalleCotizacionDTO[]>{
    return this._http.put<DetalleCotizacionDTO[]>(`${this.DetalleURL}/delete`,data );
  } 

  upDetalleCotizacion$(data:DetalleCotizacionDTO[]):Observable<DetalleCotizacionDTO[]>{
    return this._http.put<DetalleCotizacionDTO[]>(`${this.DetalleURL}`,data);
  } 

  upDateSolicitud$(data:SolicitudDTO):Observable<SolicitudDTO>{
    return   this._http.put<SolicitudDTO>(`${this.SolicitudURL}/${data.solicitudId}`,data);
  }

  getMateriales(id:number){
    
     
    this.getMaterialesFaltantes(id).subscribe( data =>{
     this.dataSourceMaterial.data = data;
    })
  }
  detalleForm: FormGroup  = new FormGroup({
    detalleCotizacionId:new FormControl(0, Validators.required),
    cantidad:new FormControl(0, Validators.required),
    materialId:new FormControl(0, Validators.required),
    cotizacionId:new FormControl(0, Validators.required),
    totalDetalle:new FormControl(0, Validators.required),
    presio:new FormControl(0, Validators.required),
    material: new FormGroup({ 
      materialId: new FormControl(0, Validators.required),
      nombre:  new FormControl('', Validators.required),
    }),
  })

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

  setDetalleFormMaterial(row){
    this.detalleForm.setValue({
      detalleCotizacionId:0,
      cantidad:0,
      materialId: row.materialId,
      cotizacionId: this.cotizacion.cotizacionId,
      totalDetalle:0,
      presio:0,
      material:({ 
        materialId:row.materialId,
        nombre: row.nombre,
      }),
    })
  }

  setDetalleFormDetalle(row){
    this.detalleForm.setValue({
      detalleCotizacionId: row.detalleCotizacionId,
      cantidad:row.cantidad,
      materialId: row.materialId,
      cotizacionId: row.cotizacionId,
      totalDetalle:row.totalDetalle,
      presio: row.presio,
      material:({ 
        materialId: row.material.materialId,
        nombre: row.material.nombre,
      }),
    })
  }

  resetDetalleFormMaterial(){
    this.detalleForm.setValue({
      detalleCotizacionId:0,
      cantidad:0,
      materialId: 0,
      cotizacionId: 0,
      totalDetalle:0,
      presio:0,
      material:({ 
        materialId:0,
        nombre: '',
      }),
    })
  }
}
