import { Component, OnInit } from '@angular/core';
import { ClienteSolicitudesService } from 'src/app/shared/Services/cliente-solicitudes.service';
import { NotificationServiceService } from 'src/app/shared/Services/notification-service.service';
import { MatDialogRef } from '@angular/material';
import { UserFormComponent } from '../../user-main/UserCreate/user-form/user-form.component';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {


  constructor(
    private _clienteService:ClienteSolicitudesService,
    private _Notification: NotificationServiceService,
    private dialogRef:MatDialogRef<UserFormComponent>
  ){
    this._clienteService.ClientesForm.patchValue({
      fecha:  new Date()
    })
   }

  ngOnInit() {
  
  }

  Enviar(){
    if(this._clienteService.ClientesForm.invalid){
      this._Notification.warn('Verifique que todos los datos estén correcto');
    }else{
     this._clienteService.saveCliente$(this._clienteService.ClientesForm.value).subscribe( val =>{
      this._clienteService.listClientes$().subscribe( data =>{
        this._clienteService.listclienteData.emit(data);
       })
    })
    this.cerrarForm();
    this._Notification.success('El cliente fue agregado correctamente')
    }
  }

  Cancelar(){
    this.cerrarForm();
  }

  cerrarForm(){
    this._clienteService.ClientesForm.reset();
    this.dialogRef.close();
  }
}
