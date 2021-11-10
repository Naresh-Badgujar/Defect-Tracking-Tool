import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '../loginService/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  
  constructor(private loginService: LoginService,
    private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if(this.loginService.isUserLoggedIn()){
        return true;
      }
      else{
        this.router.navigate(['login']);
        return false;
      }
    }
 
}
