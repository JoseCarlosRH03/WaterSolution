import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  options: FormGroup;
  public menu:Array<string> = ["Empleados","Soliucitud","Rutas","Clientes","Piezas", "Dep. y Secc."]
  constructor(fb: FormBuilder) {
   this.options = fb.group({

     fixed: false,

   });
 }
  

  ngOnInit() {
  }

}
