import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private loginService: LoginService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(
      'Activated route data in Component:::',
      this.activatedRoute.data
    );
    this.activatedRoute.data.subscribe((response: any) => {
      console.log('PRODUCT FETCHING', response);
      console.log('PRODUCT FETCHED');
    });
  }

  onSubmit() {

    let username = this.form.controls['username'].value;
    let password = this.form.controls['password'].value;

    if(username && password) {
      this.loginService.login(username, password).subscribe({
        next: (data) => console.log(data),
        error: (err) => console.log(err),
        complete: () => console.log("complete")
      })
    }
  }

}
