import { Injectable, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cliente } from '../Models/cliente';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SolicitudDTO } from '../Models/solicitud-dto';


@Injectable({
  providedIn: 'root'
})
export class ClienteSolicitudesService {
  private URL = `https://localhost:44329/api/Cliente`;
  listclienteData:  EventEmitter<Cliente[]> = new EventEmitter()

  constructor( private _http: HttpClient) { 

    this.listClientes$().subscribe( data => {
      this.listclienteData.emit(data) ;
    })

  }
 
  saveCliente$(data):Observable<Cliente>{
    return  this._http.post<Cliente>(`${this.URL}/Save`,data);
  }

  listClientes$():Observable<Cliente[]>{
    return  this._http.get<Cliente[]>(`${this.URL}`);
  }

  getSolicitudesCliente$(id:number):Observable<SolicitudDTO>{
    return  this._http.get<SolicitudDTO>(`${this.URL}/MostrarClientes/${id}`);
  }

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
    descripcion:  new FormControl('', Validators.required),
    direccionSolicitud:  new FormControl('', Validators.required),
    sector: new FormControl('', Validators.required),
    fecha:  new FormControl('', Validators.required),
    estado: new FormControl(true, Validators.required),
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
  

}


