import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { TokenService } from "./token.service";
import { Router } from "@angular/router";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `${this.tokenService.getToken()}`
      }
    });
    return next.handle(request);
  }

  private handleUnauthorized(res) {
    if (res.status == 401) {
      this.router.navigate(["auth", "signin"]);
    }
  }
}
