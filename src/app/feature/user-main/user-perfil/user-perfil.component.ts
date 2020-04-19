import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/Services/login.service';
import { EmpleadoDTO } from 'src/app/shared/InterfaceDTO/empleado-dto';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.component.html',
  styleUrls: ['./user-perfil.component.css']
})
export class UserPerfilComponent implements OnInit {
   
  constructor( private _service:LoginService, private fb: FormBuilder, private router: Router ) { 
       if(this._service.GetUser() !== true){
        this.router.navigate(['']);
       }
  }

  ngOnInit() {
    
  }

}
