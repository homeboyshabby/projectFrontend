import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WaiterAuthService implements CanActivate {
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
    let role = sessionStorage.getItem('role')
    if (role === 'w') {
      if (sessionStorage.getItem('w_login_status')) {
        return true;
      }
    }
    return false;
  }
}
