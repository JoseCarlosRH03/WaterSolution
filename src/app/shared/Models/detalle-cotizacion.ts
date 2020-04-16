import { Cotizacion } from './cotizacion';
import { Material } from './material';

export interface DetalleCotizacion {
    detalleCotizacionId: number
    cantidad:number
    totalDetalle: number
    presio: number
    materialId:number,
    cotizacionId: number,
    cotizacion: Cotizacion,
    material: Material
}
