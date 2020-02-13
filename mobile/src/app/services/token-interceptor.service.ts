import { Injectable } from '@angular/core';
import { HttpInterceptor } from "@angular/common/http";
import { AuthService } from "./auth.service";
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  intercept(req, next) {
    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: this.auth.getToken()+""  
      }
    });
    return next.handle(tokenizeReq);
  }

  constructor(
    private auth : AuthService
  ) { }
}
