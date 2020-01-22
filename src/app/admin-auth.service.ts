import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService implements CanActivate {
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
    if (role === 'a') {
      if (sessionStorage.getItem('a_login_status')) {
        return true;
      }
    }
    return false;
  }

}
