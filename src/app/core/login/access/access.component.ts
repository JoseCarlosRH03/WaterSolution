import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/Services/login.service';
import { NotificationServiceService } from 'src/app/shared/Services/notification-service.service';




@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {
  succes: boolean = true;

 

  constructor( private _LoginSevice:LoginService,  private _Notification: NotificationServiceService) {}
 
  ngOnInit() {
    
  }
   
  Adceder(){
    var valores = this._LoginSevice.loginForm.value; 

    if(this._LoginSevice.loginForm.valid){
      this._LoginSevice.Empleado(valores.UserName , valores.PassWord);
  
      this._LoginSevice.ValEMpleado$.subscribe( val =>{
        if(val.cedulaEmpleado == null){
          this.succes = false;
        }
       
      })
      
    }else{
      this.succes = false;
    }
  
   if(!this.succes){
     this._Notification.warn('Verifique que todos los datos estén correcto');
   }
  
  }

}
