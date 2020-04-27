import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteSolicitudesService } from 'src/app/shared/Services/cliente-solicitudes.service';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SolicitudDTO } from 'src/app/shared/InterfaceDTO/solicitud-dto';
import { CotizacionSolicitudService } from 'src/app/shared/Services/cotizacion-solicitud.service';
import { CotizacionesDTO } from 'src/app/shared/InterfaceDTO/cotizaciones-dto';

@Component({
  selector: 'app-table-solisitudes',
  templateUrl: './table-solisitudes.component.html',
  styleUrls: ['./table-solisitudes.component.css']
})
export class TableSolisitudesComponent implements OnInit {

  displayedColumns: string[] = 
  ['fechaSolicitud', 'departamento', 
  'No. ruta', 'sector', 'direccionSolicitud', 'estado','buscar'];
  
  dataSource = new MatTableDataSource<SolicitudDTO>() ;
  departamento ='';
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( 
    private _clienteService: ClienteSolicitudesService, 
    private _dialog:MatDialog,
    private _cotizacioservice: CotizacionSolicitudService
    ) {
      this._clienteService.resetSeguimientoForm();
      this._cotizacioservice.getSolicitud()
      this._cotizacioservice.listSolicitudesDTO.subscribe( val =>{
          this.dataSource.data = val;
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
    if(row.cotizaciones !==null){
      this._cotizacioservice.getMateriales(row.cotizaciones.cotizacionId);
      this._cotizacioservice.dataSourceDetalle.data  = row.cotizaciones.detalleCotizacion;
      row.cotizaciones.detalleCotizacion = []
      this._cotizacioservice.cotizacion = row.cotizaciones
    }else{
      this._cotizacioservice.getMateriales(0);
      this._cotizacioservice.dataSourceDetalle.data = [];
      this._cotizacioservice.cotizacion = new CotizacionesDTO(0,0, new Date(),'proceso',row.solicitudId)
    }
    this._cotizacioservice.dataSourceSeguimientos.data = row.seguimientos; 
    row.seguimientos = [];
    this._cotizacioservice.updateSolicitudesForm(row);
    this._cotizacioservice.dep =  row.seccion.departamento.nombreDepartamento;
    this._cotizacioservice.setFom();
    this._cotizacioservice.idSolicitud = row.solicitudId;
    this._cotizacioservice.solicitud = row
  }
}
