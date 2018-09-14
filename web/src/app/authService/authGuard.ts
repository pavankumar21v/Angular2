import { CanActivate, ActivatedRouteSnapshot, RouterState, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router : Router) {}
     canActivate(route :ActivatedRouteSnapshot, state : RouterState) : Observable<boolean> {
            return undefined;
     }

}