import { MaterialDTO } from './material-dto'
import { CotizacionesDTO } from './cotizaciones-dto'

export class DetalleCotizacionDTO {
    detalleCotizacionId:number
    cantidad: number
    materialId: number
    cotizacionId: number
    totalDetalle:number 
    presio:number 
    cotizacion: CotizacionesDTO
    material:MaterialDTO 
}
