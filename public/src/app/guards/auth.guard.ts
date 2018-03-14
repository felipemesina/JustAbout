import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  redirectUrl;

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  canActivate(
    _router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if (this._authService.ifLoggedIn()) {
      return true;
    } else {
      this.redirectUrl = state.url;
      this._router.navigate(['login']);
      return false;
    }
  }
}
