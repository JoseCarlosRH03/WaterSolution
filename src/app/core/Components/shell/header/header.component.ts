import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/Services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  options: FormGroup;
  public menu:Array<object> = [
    {'options':'Perfil','link':'/Main/UserMain/UserPerFil'},
    {'options':'Empleados','link':'/Main/UserMain/UserCreate'},
    {'options':'Clientes','link':'/Main/Clientes/Create'},
    {'options':'Cotizaciones','link':'/Main/Cotizacion/Solicitudes'},
  ]
  constructor(fb: FormBuilder,private router: Router,private _service:LoginService) {
   this.options = fb.group({

    fixed: false,

   });
 }
  

  ngOnInit() {
  }


  Salir(){
    localStorage.clear();
    this._service.UsuarioVal =null;
    this._service.ValEMpleado$ =null;
    this._service.estoy = false
    this.router.navigate(['']);
  }
}
