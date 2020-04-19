import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { RutaSolicitudDTO } from 'src/app/shared/InterfaceDTO/ruta-solicitud-dto';
import { ClienteSolicitudesService } from 'src/app/shared/Services/cliente-solicitudes.service';

@Component({
  selector: 'app-solicitudrutas',
  templateUrl: './solicitudrutas.component.html',
  styleUrls: ['./solicitudrutas.component.css']
})
export class SolicitudrutasComponent implements OnInit {

  displayedColumns: string[] = 
  ['fechaRuta', 'nombreEmpleado', 'apellidosEmpleado'];
  
  dataSource = new MatTableDataSource<RutaSolicitudDTO[]>() ;
 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( 
    private _clienteService: ClienteSolicitudesService, 
    ) {
    
    this._clienteService.cotizacion.subscribe( data =>{
      if(data !==null){
      this.dataSource.data = data.rutaSolicitud;
    }
    })
   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
