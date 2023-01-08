import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';

import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginResolver implements Resolve<Observable<Login>> {

  constructor(private loginService: LoginService) {}

  async resolve(route: ActivatedRouteSnapshot): Promise<any> {

    const data: Login  = await this.loginService.getLoginData().pipe(map((data: Login)=>{
      return data;
    }
    )).toPromise()

    return data;
  }

  }



