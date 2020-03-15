import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  

  loginForm: FormGroup = new FormGroup({
    UserName: new FormControl(''),
    PassWord: new FormControl('')
  });

  ContrasenaForm: FormGroup = new FormGroup({
    codigo: new FormControl(''),
    extension: new FormControl('')
  });
  

}
