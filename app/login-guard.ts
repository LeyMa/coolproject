import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {AuthenticationAuthorizationService} from "./service/AuthenticationAuthorizationService";
import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";
/**
 * Created by leyla.markosyan on 11/7/2016.
 */

@Injectable()
export class LoginGuard implements CanActivate{

    constructor(private auth: AuthenticationAuthorizationService, private router: Router) {}

    canActivate(routeSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        this.auth.redirectUrl = state.url;
        return this.auth
            .isLoggedIn()
            .map(isLogged => {
                if(!isLogged) {
                    this.router.navigate(['/login-page']);
                 }
                return isLogged;
            })
    }
}