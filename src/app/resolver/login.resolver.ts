import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginResolver implements Resolve<Observable<any>> {

  data: any;

  constructor(private loginService: LoginService) {}

  async resolve(route: ActivatedRouteSnapshot): Promise<any> {

    console.log('Called Get Product in resolver...', this.loginService.loginUsernameAndPassword);

    this.loginService.getLoginData()

    const data = await this.loginService.getLoginData().pipe(map(v=>{
      console.log("MADE IT THIS FAR", v);
      return v;
    }
    )).toPromise()

    return data;

  }

  }



