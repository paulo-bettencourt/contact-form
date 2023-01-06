import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

urlLogin = 'http://localhost:3000/login'

constructor(private http: HttpClient) { }

login(username: string, password: string) {
  return this.http.post(this.urlLogin, {username, password}, { responseType: 'text' })
}

test() {
  return this.http.get('http://localhost:3000', {
      observe: 'response',
      responseType: 'blob',
    })
}

}
