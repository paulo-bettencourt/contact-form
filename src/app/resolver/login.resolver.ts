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

    this.loginService.loginUsernameAndPassword.subscribe((data: any) => {console.log("dados do user", data), this.data = data})

    console.log('Called Get Product in resolver...', route);

    return this.data;
  }

}
