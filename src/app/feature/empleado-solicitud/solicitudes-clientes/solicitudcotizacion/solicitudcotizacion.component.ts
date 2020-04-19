import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteSolicitudesService } from 'src/app/shared/Services/cliente-solicitudes.service';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { CotizacionesDTO } from 'src/app/shared/InterfaceDTO/cotizaciones-dto';
import { DetalleCotizacionDTO } from 'src/app/shared/InterfaceDTO/detalle-cotizacion-dto';

@Component({
  selector: 'app-solicitudcotizacion',
  templateUrl: './solicitudcotizacion.component.html',
  styleUrls: ['./solicitudcotizacion.component.css']
})
export class SolicitudcotizacionComponent implements OnInit {
  displayedColumns: string[] = 
  ['nombre', 'precio', 
  'cantidad', 'totalDetalle'];
  
  dataSource = new MatTableDataSource<DetalleCotizacionDTO>() ;
  totalCotizado = "";
  fechacotizacion = '';
  estadoCotizacion ='';

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private _clienteService: ClienteSolicitudesService,) { 
    this._clienteService.cotizacion.subscribe( val =>{
      this.dataSource.data = val.cotizaciones.detalleCotizacion;
      this.totalCotizado = val.cotizaciones.totalCotizado;
      this.fechacotizacion =val.cotizaciones.fechaCotizacion;
      this.estadoCotizacion =val.cotizaciones.estadoCotizacion;
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
}
