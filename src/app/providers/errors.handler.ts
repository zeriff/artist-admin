import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { HttpResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  constructor(private injector: Injector) {}
  
  handleError(error: HttpResponse<any>) {
    let router = this.injector.get(Router)
    if (error.status == 401) {
      router.navigate(["auth", "signin"]);
    }
  }
}
