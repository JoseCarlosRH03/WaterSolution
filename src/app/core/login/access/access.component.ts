import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/Services/login.service';




@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {

  LoginSevice_: LoginService;

  constructor( private Form:LoginService ) 
  {
    this.LoginSevice_ = Form;
  }

  ngOnInit() {
    
  }

}
