import { inject, Injectable } from '@angular/core';
import { Credentials } from '../dto/credentials.dto';
import { Observable, tap } from 'rxjs';
import { LoginResonse } from '../dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { APP_API } from 'src/app/config/app-api.config';
import { APP_CONFIG } from 'src/app/config/app-const.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  login(credentials: Credentials): Observable<LoginResonse> {
    return this.http.post<LoginResonse>(APP_API.login, credentials).pipe(
      tap((response) => {
        // Todo: Cacher le Token
        localStorage.setItem(APP_CONFIG.authToken, response.id);
      })
    );
  }
  logout() {
    localStorage.removeItem(APP_CONFIG.authToken);
  }
  isAuthenticated(): boolean {
    return !! localStorage.getItem(APP_CONFIG.authToken);
  }
}
