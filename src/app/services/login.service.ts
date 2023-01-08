import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

urlLogin = 'http://localhost:3000/login';
usernameAndPassword$ = new Subject<any>;

constructor(private http: HttpClient) { }

login(username: string, password: string) {
  return this.http.post(this.urlLogin, {username, password})
}

getLoginData(): Observable<Login> {
  return this.http.get<Login>('http://localhost:3000/loginData');
}

set loginData(usernameAndPassword: Login) {
  this.usernameAndPassword$.next(usernameAndPassword);
}

get loginUsernameAndPassword() {
  return this.usernameAndPassword$;
}

}
