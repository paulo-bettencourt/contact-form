import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private loginService: LoginService, private activatedRoute: ActivatedRoute, private router: Router) { }

  onSubmit() {

    let username = this.form.controls['username'].value;
    let password = this.form.controls['password'].value;

    this.loginService.loginData = this.form.getRawValue();

    if(username && password) {
      this.loginService.login(username, password).subscribe({
        next: (data: any) => {
          console.log("login executed", data),
          this.router.navigate(['dashboard']),
          localStorage.setItem('data_login', data)
        },
        error: (err) => console.log(err),
        complete: () => console.log("complete")
      })
    }
  }

}
