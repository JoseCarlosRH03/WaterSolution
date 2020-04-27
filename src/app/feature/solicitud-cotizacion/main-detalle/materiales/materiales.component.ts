import { Component, OnInit, ViewChild } from '@angular/core';
import { CotizacionSolicitudService } from 'src/app/shared/Services/cotizacion-solicitud.service';
import { MatDialog, MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Material } from 'src/app/shared/Models/material';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent implements OnInit {

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  displayedColumns: string[] = ['nombre', 'AddMaterial'];
  
 

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor( 
    private _CotizacionServices: CotizacionSolicitudService,  
    private dialog:MatDialog,
    
    ) 
    {
      
    }

  ngOnInit() {
    this._CotizacionServices.dataSourceMaterial.paginator = this.paginator;
    this._CotizacionServices.dataSourceMaterial.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this._CotizacionServices.dataSourceMaterial.filter = filterValue.trim().toLowerCase();

    if (this._CotizacionServices.dataSourceMaterial.paginator) {
      this._CotizacionServices.dataSourceMaterial.paginator.firstPage();
    } 
  }

  AddMaterial(row){
    this._CotizacionServices.botonAddEdit = true;
   this._CotizacionServices.setDetalleFormMaterial(row);
  }
}
