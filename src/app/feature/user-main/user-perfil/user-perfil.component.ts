import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/Services/login.service';
import { EmpleadoDTO } from 'src/app/shared/Models/empleado-dto';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.component.html',
  styleUrls: ['./user-perfil.component.css']
})
export class UserPerfilComponent implements OnInit {
 
  constructor( private _service:LoginService, private fb: FormBuilder ) { 

    this._service.ValEMpleado$.subscribe( val =>{

      this._service.EmpleadoForm.setValue({
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
    })
  }

  ngOnInit() {
    
  }

}
