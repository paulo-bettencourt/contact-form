import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, private _snackBar: MatSnackBar) { }

  onSubmit() {
    let username = this.form.controls['username'].value;
    let password = this.form.controls['password'].value;

    if(username && password) {
    this.loginService.login(username, password).subscribe({
        next: (data: any) => {
          localStorage.setItem('data_login', JSON.stringify(data)),
          this.router.navigate(['/dashboard'])
        },
        error: (err) => {
          console.log(err),
          this._snackBar.open(err.error.message, "Close")}
    })
    }
  }

}
