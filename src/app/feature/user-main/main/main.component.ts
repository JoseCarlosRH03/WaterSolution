import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  options: FormGroup;
   public menu:Array<string> = ["Empleados","Soliucitud","Rutas","Clientes","Piezas", "Dep. y Secc."]
   constructor(fb: FormBuilder) {
    this.options = fb.group({

      fixed: true,

    });
  }
   
  ngOnInit() {
  }
  
}
