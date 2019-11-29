import { EmailService } from './email.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private mailS : EmailService,
    private router : Router ){
      let acc = sessionStorage.getItem("account");
      if( acc ) mailS.userData = acc;
  }

  canActivate(route: ActivatedRouteSnapshot, 
    router: RouterStateSnapshot
    ): boolean | Promise<boolean> | Observable<boolean> {
      if(this.mailS.userData == "" ){
        this.router.navigate(['/login']);
        return false;
      }
      return true;
  }
}
