import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginResolver implements Resolve<Observable<any>> {

  data: any;

  constructor(private loginService: LoginService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {

    console.log('Called Get Product in resolver...', this.loginService.loginUsernameAndPassword);

    return this.loginService.loginUsernameAndPassword;

  }

  }



