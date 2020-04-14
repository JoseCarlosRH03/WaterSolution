import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
    {'options':'Solicitudes','link':'/Main/Clientes/SolicitudCreate'}
  ]
  constructor(fb: FormBuilder) {
   this.options = fb.group({

    fixed: false,

   });
 }
  

  ngOnInit() {
  }

}
