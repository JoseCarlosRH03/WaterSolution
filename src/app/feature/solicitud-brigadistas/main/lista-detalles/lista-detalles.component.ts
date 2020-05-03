import { Component, OnInit, ViewChild } from '@angular/core';
import { CotizacionSolicitudService } from 'src/app/shared/Services/cotizacion-solicitud.service';
import { DetalleCotizacionDTO } from 'src/app/shared/InterfaceDTO/detalle-cotizacion-dto';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { RutaServicesService } from 'src/app/shared/Services/ruta-services.service';
import { NotificationServiceService } from 'src/app/shared/Services/notification-service.service';
import { BrigadistaService } from 'src/app/shared/Services/brigadista.service';

@Component({
  selector: 'app-lista-detalles',
  templateUrl: './lista-detalles.component.html',
  styleUrls: ['./lista-detalles.component.css']
})
export class ListaDetallesComponent implements OnInit {

  
  displayedColumns: string[] = 
  ['nombre', 'cantidad'];
  
  dataSource = new MatTableDataSource<DetalleCotizacionDTO>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( private _brigadistaService: BrigadistaService) { 
    this._brigadistaService.getRuta();
    }

  ngOnInit() {
    this._brigadistaService.dataSourceDetalle.paginator = this.paginator;
    this._brigadistaService.dataSourceDetalle.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this._brigadistaService.dataSourceDetalle.filter = filterValue.trim().toLowerCase();

    if (this._brigadistaService.dataSourceDetalle.paginator) {
      this._brigadistaService.dataSourceDetalle.paginator.firstPage();
    } 
  }

}
