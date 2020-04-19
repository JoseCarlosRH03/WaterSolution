
import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteSolicitudesService } from 'src/app/shared/Services/cliente-solicitudes.service';
import { MatPaginator, MatSort, MatTableDataSource, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material';
import { SolicitudDTO } from 'src/app/shared/InterfaceDTO/solicitud-dto';
import { CreateSolicitudComponent } from '../create-solicitud/create-solicitud.component';

@Component({
  selector: 'app-solicitudes-clientes',
  templateUrl: './solicitudes-clientes.component.html',
  styleUrls: ['./solicitudes-clientes.component.css']
})
export class SolicitudesClientesComponent implements OnInit {

  displayedColumns: string[] = 
  ['fechaSolicitud', 'departamento', 
  'No. ruta', 'sector', 'direccionSolicitud', 'estado','buscar'];
  
  dataSource = new MatTableDataSource<SolicitudDTO>() ;
  departamento ='';
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( 
    private _clienteService: ClienteSolicitudesService, 
    private dialogRef:MatDialogRef<SolicitudesClientesComponent>,
    private dialog:MatDialog
    ) {
    
    this._clienteService.listSolicitudesDTO.subscribe( data =>{
      this.dataSource.data = data;
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

  cerrarForm(){
    this._clienteService.SolicitudForm.reset();
    this._clienteService.cotizacion.emit(null) 
    this.departamento ='';
    this.dialogRef.close();
  }

  Cargar(row){
    this._clienteService.setSolicitudesForm(row)
    this._clienteService.cotizacion.emit(row) 
    this.departamento = row.seccion.departamento.nombreDepartamento
  }

  Add(){
    this._clienteService.resetCliente();
    const config = new MatDialogConfig();
    config.disableClose = true;
    config.autoFocus = true;
    config.width = "60%";
    this.dialog.open(CreateSolicitudComponent,config);
  }

}
