import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginService } from '../Services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
 
 private state: boolean
  constructor( private _services: LoginService, private ruter:Router){}
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return (this._services !== null && this._services.ValEMpleado$.pipe( 
        map( val=>{ return (val.cedulaEmpleado !== null)?true:false})))
         
  }
  
}
