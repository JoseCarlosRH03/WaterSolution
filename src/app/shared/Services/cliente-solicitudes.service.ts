import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cliente } from '../Models/cliente';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClienteSolicitudesService {
  private URL = `https://localhost:44329/api/Cliente`;

  constructor( private _http: HttpClient) { }
 
  saveCliente$(data):Observable<Cliente>{
    return  this._http.post<Cliente>(`${this.URL}/Save`,data);
  }

  ClientesForm: FormGroup  = new FormGroup({
    PersonaId: new FormControl(0),
    Nombre:  new FormControl('', Validators.required),
    Apellidos:  new FormControl('', Validators.required),
    Cedula: new FormControl('', Validators.required),
    Direccion:  new FormControl('', Validators.required),
    Telefono: new FormControl('', Validators.required),
    Fecha:  new FormControl('', Validators.required),
  })

  SolicitudForm: FormGroup  = new FormGroup({
    SolicitudId: new FormControl(0),
    Descripcion:  new FormControl('', Validators.required),
    DireccionSolicitud:  new FormControl('', Validators.required),
    Sector: new FormControl('', Validators.required),
    Fecha:  new FormControl('', Validators.required),
    Estado: new FormControl(true, Validators.required),
    TipoSolicitud:  new FormControl('', Validators.required),
    SeccionId:  new FormControl(0, Validators.required),
    PersonaId:  new FormControl(0, Validators.required),
  })

}


