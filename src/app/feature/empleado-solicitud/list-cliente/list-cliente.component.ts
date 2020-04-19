import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/shared/Models/cliente';
import { ClienteSolicitudesService } from 'src/app/shared/Services/cliente-solicitudes.service';
import { MatTableDataSource, MatDialogConfig, MatDialog, MatDialogRef } from '@angular/material';
import { CreateClienteComponent } from '../create-cliente/create-cliente.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { SolicitudesClientesComponent } from '../solicitudes-clientes/solicitudes-clientes.component';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit {

  displayedColumns: string[] = 
  ['nombre', 'apellidos', 
  'cedula', 'direccion', 
  'telefono', 'fecha', 'Editar', 'buscar'];
  
  dataSource = new MatTableDataSource<Cliente>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( 
    private _clienteServices: ClienteSolicitudesService,  
    private dialog:MatDialog,
    
    ) 
    {
      this._clienteServices.starList();
      this._clienteServices.listclienteData.subscribe( val =>{
        this.dataSource.data = val
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

  buscarSolicitud(row){
   this._clienteServices.getSolicitudesCliente$(row.personaId).subscribe( data =>{
    this._clienteServices.idPersona = row.personaId
    this._clienteServices.listSolicitudesDTO.emit(data)
   })
   const config = new MatDialogConfig();
    config.disableClose = true;
    config.autoFocus = true;
    config.width = "200%";
    this.dialog.open(SolicitudesClientesComponent,config);
  }

  ModificarEmpleado(row){
    console.log("datos",row)
    this._clienteServices.setClienteForm(row);
    const config = new MatDialogConfig();
    config.disableClose = true;
    config.autoFocus = true;
    config.width = "60%";
    this.dialog.open(CreateClienteComponent,config);
  }

  Add(){
    this._clienteServices.resetCliente();
    const config = new MatDialogConfig();
    config.disableClose = true;
    config.autoFocus = true;
    config.width = "60%";
    this.dialog.open(CreateClienteComponent,config);
  }

}


