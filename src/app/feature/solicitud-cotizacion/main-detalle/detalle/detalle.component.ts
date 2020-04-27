import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { CotizacionSolicitudService } from 'src/app/shared/Services/cotizacion-solicitud.service';
import { DetalleCotizacion } from 'src/app/shared/Models/detalle-cotizacion';
import { DetalleCotizacionDTO } from 'src/app/shared/InterfaceDTO/detalle-cotizacion-dto';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  
 
  displayedColumns: string[] = 
  ['nombre', 'precio', 
  'cantidad', 'totalDetalle','editar' , 'eliminar'];
  
  dataSource = new MatTableDataSource<DetalleCotizacionDTO>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( 
    private _cotizacionService: CotizacionSolicitudService,  
    private dialog:MatDialog,
    
    ) 
    {
      
    }

  ngOnInit() {
    this._cotizacionService.dataSourceDetalle.paginator = this.paginator;
    this._cotizacionService.dataSourceDetalle.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this._cotizacionService.dataSourceDetalle.filter = filterValue.trim().toLowerCase();

    if (this._cotizacionService.dataSourceDetalle.paginator) {
      this._cotizacionService.dataSourceDetalle.paginator.firstPage();
    } 
  }

  editar(row){
    this._cotizacionService.botonAddEdit = false;
   this._cotizacionService.setDetalleFormDetalle(row);
  }


  eliminar(row){
    if(row.detalleCotizacionId !== 0){
      this._cotizacionService.detalleDelete.push(row)
    }
  
    var elemento =  this._cotizacionService.dataSourceDetalle.data.map( material => material.materialId)
    .indexOf(row.material.materialId);
    this._cotizacionService.dataSourceDetalle.data.splice( elemento,1)
    this._cotizacionService.dataSourceDetalle._updateChangeSubscription();

    this._cotizacionService.dataSourceMaterial.data.push(row.material);
    this._cotizacionService.dataSourceMaterial._updateChangeSubscription();
    this._cotizacionService.Total()
  }

}
