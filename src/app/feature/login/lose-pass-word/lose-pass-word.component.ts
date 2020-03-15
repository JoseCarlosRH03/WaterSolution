import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/Services/login.service';

@Component({
  selector: 'app-lose-pass-word',
  templateUrl: './lose-pass-word.component.html',
  styleUrls: ['./lose-pass-word.component.css']
})
export class LosePassWordComponent implements OnInit {

  LoginSevice_: LoginService;
  constructor( private Form:LoginService) { 
    this.LoginSevice_ = Form
  }

  ngOnInit() {
    
  }

}
