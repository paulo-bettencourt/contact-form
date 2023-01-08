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

      this.loginService.login(username, password).subscribe({
        next: (data: any) => {
          console.log("login executed", data),
          localStorage.setItem('data_login', JSON.stringify(data)),
          this.navigate()
        },
        error: (err) => console.log("error", err),
        complete: () => console.log("complete")
      })

  }

  navigate() {
    console.log("navigate!")
    this.router.navigate(['/dashboard'], { relativeTo: this.activatedRoute })
  }

}
