import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { EmpleadoDTO } from '../InterfaceDTO/empleado-dto';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormEmpleadoDTO } from '../InterfaceDTO/form-empleado-dto';
import { Empleados } from '../Models/empleados';
import { MatTableDataSource } from '@angular/material';
import { Cargo } from '../Models/cargo';
import { Departamentos } from '../Models/departamentos';
import { Secciones } from '../Models/secciones';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoServiceService {

   lista:  EventEmitter<EmpleadoDTO[]> = new EventEmitter()
   dep = 0;
   dataSource: MatTableDataSource<EmpleadoDTO>;
   private LoginURL = `https://localhost:44329/api/Empleado`;
   cargos:Cargo[] = [];
   Departamentos:Departamentos[] = [];
   secciones:Secciones[] = [];
  selected = '';
  constructor(private _http:HttpClient, private fb: FormBuilder) { 

    this.starList();
  
  }


   GetListEmpleados$():Observable<EmpleadoDTO[]>{
    return this._http.get<EmpleadoDTO[]>(`${this.LoginURL}/ListadoEmpleado`);
  }
 
  
  GetFormEmpleados$():Observable<FormEmpleadoDTO>{
    return this._http.get<FormEmpleadoDTO>(`${this.LoginURL}/FormEmpleados`);
  }

  setEmpleado$(data:Empleados):Observable<Empleados>{
    return this._http.post<Empleados>(`${this.LoginURL}/save`,data);
  } 

  upDateEmpleado$(data:Empleados):Observable<Empleados>{
    return   this._http.put<Empleados>(`${this.LoginURL}/${data.idEmpleado}`,data);
  }

 starList(){
  this.GetListEmpleados$().subscribe( valor =>{
    this.lista.emit(valor);
 });
 }
  SetValueForm(){
    this.GetFormEmpleados$().subscribe(val => {
      this.cargos = val.cargos
      this.Departamentos = val.departamentos;
      

      if(this.EmpleadosForm.get('cargoidCargo').value !== 0 ){
        var c = val.cargos.map( cargo => cargo.idCargo).indexOf(this.EmpleadosForm.get('cargoidCargo').value)
        this.EmpleadosForm.patchValue({
          cargoidCargo: val.cargos[c].idCargo.toString()
          
        })
      }
      
      if(this.EmpleadosForm.get('seccionIdSeccion').value !== 0 ){
        var b = val.departamentos.map( departamento => departamento.idDepartamento).indexOf(this.dep)
        this.selected = val.departamentos[b].idDepartamento.toString()
        this.secciones = val.departamentos[b].secciones
        var d = this.secciones.map( secc => secc.idSeccion).indexOf(this.EmpleadosForm.get('seccionIdSeccion').value)
        this.EmpleadosForm.patchValue({
         seccionIdSeccion: this.secciones[d].idSeccion.toString()

        })
       
      }
    }); 
  }
 
  EmpleadosForm: FormGroup  = new FormGroup({
    idEmpleado: new FormControl(0),
    nombreEmpleado: new FormControl('', Validators.required),
    apellidosEmpleado:new FormControl('', Validators.required),
    cedulaEmpleado: new FormControl('', Validators.required), 
    telefonoEmpleado: new FormControl('', Validators.required),
    seccionIdSeccion: new FormControl('',Validators.required ),
    cargoidCargo: new FormControl('', Validators.required),
    usuario: new FormGroup({ 
      IdUsuario: new FormControl(0),
      NombreUsuario:  new FormControl('', Validators.required),
      PasswordUsuario:  new FormControl('', Validators.required),
      EstadoUsuario: new FormControl(true),
    }),
    fechaEmpleado: new FormControl('', Validators.required),
    direccionEmpleado: new FormControl('', Validators.required), 
      
   
  });

  resetEmpleado(){
      this.EmpleadosForm.setValue({
        idEmpleado:0,
        nombreEmpleado:'' ,
        apellidosEmpleado:'' ,
        cedulaEmpleado: '', 
        telefonoEmpleado: '',
        seccionIdSeccion: 0,
        cargoidCargo: 0,
        usuario: ({ 
          IdUsuario: 0,
          NombreUsuario: '',
          PasswordUsuario: '',
          EstadoUsuario:true,
        }),
        fechaEmpleado: '',
        direccionEmpleado:'', 
      })
    }

  updateEmpleadoForm(val: EmpleadoDTO){
  this.dep = val.idDepartamento;
    this.EmpleadosForm.setValue({
      idEmpleado:val.idEmpleado,
      nombreEmpleado:val.nombreEmpleado ,
      apellidosEmpleado:val.apellidosEmpleado ,
      cedulaEmpleado: val.cedulaEmpleado, 
      telefonoEmpleado: val.telefornoEmpleado,
      seccionIdSeccion: val.idSeccion,
      cargoidCargo: val.idCargo,
      usuario: ({ 
        IdUsuario: val.idUsuario,
        NombreUsuario: val.nombreUsuario,
        PasswordUsuario: val.passwordUsuario,
        EstadoUsuario: val.estadoUsuario,
      }),
      fechaEmpleado: val.fechaEmpleado,
      direccionEmpleado:val.direccionEmpleado, 
    })
  }  
}


