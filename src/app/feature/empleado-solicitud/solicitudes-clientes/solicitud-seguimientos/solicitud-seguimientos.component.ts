import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SeguimientosDTO } from 'src/app/shared/InterfaceDTO/seguimientos-dto';
import { ClienteSolicitudesService } from 'src/app/shared/Services/cliente-solicitudes.service';

@Component({
  selector: 'app-solicitud-seguimientos',
  templateUrl: './solicitud-seguimientos.component.html',
  styleUrls: ['./solicitud-seguimientos.component.css']
})
export class SolicitudSeguimientosComponent implements OnInit {

  displayedColumns: string[] = 
  ['fecha', 'seguimiento'];
  
  dataSource = new MatTableDataSource<SeguimientosDTO[]>() ;
 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( 
    private _clienteService: ClienteSolicitudesService, 
    ) {
    
    this._clienteService.cotizacion.subscribe( data =>{
      this.dataSource.data = data.seguimientos;
    })
   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
