import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication-service/authentication-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  canActivate() {
    if (this.authenticationService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login'])
    return false;
  }

}
