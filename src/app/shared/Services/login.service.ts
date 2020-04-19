import { Injectable, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpleadoDTO } from '../InterfaceDTO/empleado-dto';
import {Router} from "@angular/router";



@Injectable({
  providedIn: 'root'
})
export class LoginService {

   private LoginURL = `https://localhost:44329/api/Empleado/`;

    ValEMpleado$:Observable<EmpleadoDTO> = null;
    UsuarioVal:EmpleadoDTO;
    estoy:boolean = false;
   constructor(private _http:HttpClient, private fb: FormBuilder,private router: Router) {
 
    if(localStorage.length >0){
      this.UsuarioVal= JSON.parse(localStorage.getItem('Usuario'));
    }

    if(this.GetUser() !== true){
      this.router.navigate(['']);
     }else{
      if(this.GetUser()){
        this.router.navigate(['Main/UserMain']);
       }
     }

    }

    public Empleado(UserName: string, PassWord:string){ 
   
      this.ValEMpleado$ = this._http.get<EmpleadoDTO>(`${this.LoginURL}Login/${UserName}/${PassWord}`);

      this.ValEMpleado$.subscribe( val =>{ 
        
        if(val.cedulaEmpleado !== null){
          localStorage.setItem('Usuario', JSON.stringify(val));
          this.loginForm.reset()
        }
       
      })
    }

    GetUser(){
      if( this.ValEMpleado$ !== null ){
        this.ValEMpleado$.subscribe( val =>{
          this.SetValue(val);
        })
        this.estoy = true
      }else{
        if(this.UsuarioVal){
          this.SetValue(this.UsuarioVal)
          this.estoy = true
        }
      }

      return this.estoy
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

  SetValue(val){
    this.EmpleadoForm.setValue({
      nombreUsuario: val.nombreUsuario,
      nombreEmpleado: val.nombreEmpleado,
      apellidosEmpleado: val.apellidosEmpleado, 
      cedulaEmpleado: val.cedulaEmpleado, 
      fechaEmpleado: val.fechaEmpleado,
      telefornoEmpleado: val.telefornoEmpleado,
      direccionEmpleado: val.direccionEmpleado,
      nombreSeccion: val.nombreSeccion,
      nombreDepartamento: val.nombreDepartamento,
      nombreCargo: val.nombreCargo,
      nombreRole: val.nombreRole,
      })
  }
  
  
}
