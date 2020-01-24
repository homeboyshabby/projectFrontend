import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DelboyAuthService implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isUserLoggedIn()) {
      return true;
    }
    else {
      alert("not authorized!")
      this.router.navigate(['/home/login']);
      return false;
    }
  }

  isUserLoggedIn() {
    //debugger
    let role = sessionStorage.getItem('role')
    if (role === 'd') {
      if (sessionStorage.getItem('d_login_status')) {
        return true;
      }
    }
    return false;
  }
}
