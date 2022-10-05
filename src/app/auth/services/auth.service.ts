import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/register-request.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CurrentUserInterface } from '../../shared/types/current-user.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthResponseInterfase } from '../types/auth-response.interfase';
import { LoginRequestInterface } from '../types/login-request.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(resp: AuthResponseInterfase) {
    return resp.user;
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/users`;

    return this.http
      .post<AuthResponseInterfase>(url, data)
      .pipe(map(this.getUser));
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/users/login`;

    return this.http
      .post<AuthResponseInterfase>(url, data)
      .pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user';

    return this.http.get<AuthResponseInterfase>(url).pipe(map(this.getUser));
  }
}
