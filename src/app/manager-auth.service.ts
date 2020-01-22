import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ManagerAuthService implements CanActivate {
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
    if (role === 'm') {
      if (sessionStorage.getItem('m_login_status')) {
        return true;
      }
    }
    return false;
  }
}
