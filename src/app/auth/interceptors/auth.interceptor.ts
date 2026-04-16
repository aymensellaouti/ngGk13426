import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { APP_CONFIG } from 'src/app/config/app-const.config';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  authService = inject(AuthService);
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log('in AuthInterceptor');
    if(this.authService.isAuthenticated()) {
      const newReq = request.clone({
        setHeaders: {
          [APP_CONFIG.headerParam]: localStorage.getItem(APP_CONFIG.authToken) ?? '',
        },
      });
      return next.handle(newReq);
    }
    return next.handle(request);
  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};
