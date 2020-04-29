import { Component, OnInit } from '@angular/core';
import { EmpleadoServiceService } from 'src/app/shared/Services/empleado-service.service';
import { Cargo } from 'src/app/shared/Models/cargo';
import { Departamentos } from 'src/app/shared/Models/departamentos';
import { Secciones } from 'src/app/shared/Models/secciones';
import { MatDialogRef } from '@angular/material';
import { NotificationServiceService } from 'src/app/shared/Services/notification-service.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  cargos:Cargo[] = [];
  Departamentos:Departamentos[] = [];
  secciones:Secciones[] = [];
  selected = '';
  constructor( 
    private _EmpleadoService: EmpleadoServiceService, 
    private dialogRef:MatDialogRef<UserFormComponent>,
    private pupop:NotificationServiceService,
    ){
     this._EmpleadoService.SetValueForm()

      if(this._EmpleadoService.EmpleadosForm.get('fechaEmpleado').value === '' ){
        this._EmpleadoService.EmpleadosForm.patchValue({
          fechaEmpleado:  new Date()
        })
      }
   }

  ngOnInit() {
  
  } 

  Enviar(){
   if(this._EmpleadoService.EmpleadosForm.valid){
      if(this._EmpleadoService.EmpleadosForm.get('idEmpleado').value === 0 ){
        this._EmpleadoService.setEmpleado$(this._EmpleadoService.EmpleadosForm.value).subscribe(val =>{
          this._EmpleadoService.GetListEmpleados$().subscribe( val =>{
            this._EmpleadoService.lista.emit(val);
          })
          this.cerrarForm();
        });
        this.pupop.warn("Creación Completada")
       }else{
        this._EmpleadoService.upDateEmpleado$(this._EmpleadoService.EmpleadosForm.value).subscribe(val =>{
          
          this._EmpleadoService.GetListEmpleados$().subscribe( val =>{
            this._EmpleadoService.lista.emit(val);
          })
          this.cerrarForm();
        });
        this.pupop.warn("Actualización Completada")
       }
    }else{
      this.pupop.warn("verifique que todos los campos esten correctos")
    }
  }

  Change(secciones){
    this._EmpleadoService.secciones = secciones
  }

  Cancelar(){
    this.cerrarForm();
  }

  cerrarForm(){
    this._EmpleadoService.EmpleadosForm.reset();
    this.dialogRef.close();
  }

}
