import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SolicitudDTO } from 'src/app/shared/InterfaceDTO/solicitud-dto';
import { RutaServicesService } from 'src/app/shared/Services/ruta-services.service';


@Component({
  selector: 'app-tabla-solicitudes',
  templateUrl: './tabla-solicitudes.component.html',
  styleUrls: ['./tabla-solicitudes.component.css']
})
export class TablaSolicitudesComponent implements OnInit {

  displayedColumns: string[] = 
  ['fechaSolicitud', 'departamento', 
   'sector', 'direccionSolicitud', 'estado','buscar'];
  
  dataSource = new MatTableDataSource<SolicitudDTO>() ;
  departamento ='';
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( private _dialog:MatDialog, private _rutaServices:RutaServicesService) {

    this._rutaServices.getSolicitud();
    this._rutaServices.listSolicitudesDTO.subscribe( data =>{
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

  Cargar(row){
    this._rutaServices.updateSolicitudesForm(row);
  }
}
