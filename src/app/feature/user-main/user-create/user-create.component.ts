import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpleadoServiceService } from 'src/app/shared/Services/empleado-service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'
import { EmpleadoDTO } from 'src/app/shared/Models/empleado-dto';
import { NotificationServiceService } from 'src/app/shared/Services/notification-service.service';
import { UserFormComponent } from '../UserCreate/user-form/user-form.component';
import { MatDialog, MatDialogConfig } from '@angular/material';



@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  displayedColumns: string[] = 
  ['nombreUsuario', 'nombreEmpleado', 
  'apellidosEmpleado', 'nombreDepartamento', 
  'nombreSeccion', 'nombreCargo', 'Editar', 'Eliminar'];
  
  dataSource = new MatTableDataSource<EmpleadoDTO>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( 
    private _EmpleadoService: EmpleadoServiceService, 
    private _popPoServices: NotificationServiceService,
    private dialog:MatDialog ) 
    {
      this._EmpleadoService.starList()
     this._EmpleadoService.lista.subscribe( valor =>{
       this.dataSource.data = valor  ;
     })
   
    }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  EliminarEmpleado(row){
    row.estadoUsuario = false;
    this._EmpleadoService.updateEmpleadoForm(row);
    this._EmpleadoService.SetValueForm()
    if(this._EmpleadoService.EmpleadosForm.get('idEmpleado').value !== 0 ){
      this._EmpleadoService.upDateEmpleado$(this._EmpleadoService.EmpleadosForm.value).subscribe(val =>{
          
        this._EmpleadoService.GetListEmpleados$().subscribe( val =>{
          this._EmpleadoService.lista.emit(val);
        })
      });
   
  }
}

  ModificarEmpleado(row){
    this._EmpleadoService.updateEmpleadoForm(row);
    const config = new MatDialogConfig();
    config.disableClose = true;
    config.autoFocus = true;
    config.width = "60%";
    this.dialog.open(UserFormComponent,config);
  }

  Add(){
    this._EmpleadoService.resetEmpleado();
    const config = new MatDialogConfig();
    config.disableClose = true;
    config.autoFocus = true;
    config.width = "60%";
    this.dialog.open(UserFormComponent,config);
  }

  

}
