import { Injectable, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpleadoDTO } from '../Models/empleado-dto';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

   private LoginURL = `https://localhost:44329/api/Empleado/`;

    ValEMpleado$:Observable<EmpleadoDTO> = null;

   constructor(private _http:HttpClient, private fb: FormBuilder) { }

    public Empleado(UserName: string, PassWord:string){ 
   
      this.ValEMpleado$ = this._http.get<EmpleadoDTO>(`${this.LoginURL}Login/${UserName}/${PassWord}`);
    }

    loginForm: FormGroup =  this.fb.group({
      UserName: ['', Validators.required],
      PassWord: ['', Validators.required],
    })

  ContrasenaForm: FormGroup = new FormGroup({
    codigo: new FormControl(''),
    extension: new FormControl('')
  });

  EmpleadoForm: FormGroup  = new FormGroup({
    nombreEmpleado: new FormControl(''),
    apellidosEmpleado:new FormControl(''),
    cedulaEmpleado: new FormControl(''), 
    telefornoEmpleado: new FormControl(''),
    direccionEmpleado: new FormControl(''),
    nombreDepartamento: new FormControl(''),
    nombreSeccion: new FormControl(''),
    nombreCargo: new FormControl(''),
    nombreUsuario: new FormControl(''),
    fechaEmpleado: new FormControl(''),
    nombreRole: new FormControl(''),
  });


  
  
}
