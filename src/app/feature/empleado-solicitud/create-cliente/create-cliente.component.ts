import { Component, OnInit } from '@angular/core';
import { ClienteSolicitudesService } from 'src/app/shared/Services/cliente-solicitudes.service';
import { NotificationServiceService } from 'src/app/shared/Services/notification-service.service';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {

  constructor(private _clienteService:ClienteSolicitudesService ,private _Notification: NotificationServiceService) { }

  ngOnInit() {
    this._clienteService.ClientesForm.patchValue({
      Fecha:  new Date()
    })
  }

  Enviar(){
    if(this._clienteService.ClientesForm.invalid){
      this._Notification.warn('Verifique que todos los datos estén correcto');
    }else{
     this._clienteService.saveCliente$(this._clienteService.ClientesForm.value).subscribe( val =>{
       console.log(val);
     })
    }
    
  }

  Cancelar(){
    this._clienteService.ClientesForm.reset();
    this._clienteService.ClientesForm.patchValue({
      Fecha:  new Date()
    })
  }
}
